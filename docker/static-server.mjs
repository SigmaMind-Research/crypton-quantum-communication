import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "public");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function resolvePath(urlPath) {
  const cleaned = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(
    /^(\.\.[/\\])+/,
    "",
  );
  return join(root, cleaned);
}

function sendFile(res, filePath) {
  const ext = extname(filePath).toLowerCase();
  res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
  createReadStream(filePath).pipe(res);
}

createServer((req, res) => {
  const target = resolvePath(req.url || "/");

  if (existsSync(target) && statSync(target).isFile()) {
    return sendFile(res, target);
  }

  if (existsSync(target) && statSync(target).isDirectory()) {
    const indexFile = join(target, "index.html");
    if (existsSync(indexFile)) return sendFile(res, indexFile);
  }

  const fallback = join(root, "index.html");
  if (existsSync(fallback)) return sendFile(res, fallback);

  res.statusCode = 404;
  res.end("Not found");
}).listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
