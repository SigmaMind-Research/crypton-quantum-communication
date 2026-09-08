import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;
const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ??
  "https://script.google.com/macros/s/AKfycbwsX3gcG_j1iinO0rQO9kfS4ffdxgQiLLyWZuT61OC9XLT7rJKEuQWjSg4YsAhC4cAt/exec";

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/pilot-reserve") {
        return await handlePilotReserve(request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

async function handlePilotReserve(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, 405);
  }

  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const name = String(payload.name ?? "").trim();
    const company = String(payload.company ?? "").trim();
    const email = String(payload.email ?? "").trim();
    const role = String(payload.role ?? "").trim();
    const submittedAt = String(payload.submittedAt ?? new Date().toISOString());
    const source = String(payload.source ?? "");

    if (!name || !company || !email || !role) {
      return json({ ok: false, error: "Missing required fields" }, 400);
    }

    const upstream = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name,
        company,
        email,
        role,
        submittedAt,
        source,
      }),
    });
    const upstreamBody = await upstream.text();

    if (
      !upstream.ok ||
      /<title>\s*Error\s*<\/title>/i.test(upstreamBody) ||
      /Exception:|TypeError:|ReferenceError:/i.test(upstreamBody)
    ) {
      return json(
        {
          ok: false,
          error: `Upstream failed (${upstream.status})`,
          details: upstreamBody.slice(0, 300),
        },
        502,
      );
    }

    return json({ ok: true }, 200);
  } catch (error) {
    console.error(error);
    return json({ ok: false, error: "Invalid request" }, 400);
  }
}

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
