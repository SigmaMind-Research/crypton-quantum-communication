// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const ghPagesBase =
  isGitHubActions && repoName ? `/${repoName}/` : "/";
const routerBasepath =
  ghPagesBase.endsWith("/") && ghPagesBase.length > 1
    ? ghPagesBase.slice(0, -1)
    : ghPagesBase;
const hmrHost = process.env.VITE_HMR_HOST;
const hmrProtocol = (process.env.VITE_HMR_PROTOCOL as "ws" | "wss" | undefined) ?? undefined;
const hmrClientPort = process.env.VITE_HMR_CLIENT_PORT
  ? Number(process.env.VITE_HMR_CLIENT_PORT)
  : undefined;

export default defineConfig({
  vite: {
    server: {
      allowedHosts: [
        ".azurecontainerapps.io",
        "crypton.wonderfulsea-1d4ac329.southeastasia.azurecontainerapps.io",
        "crypton.sigmamind.xyz",
      ],
      hmr: hmrHost
        ? {
            host: hmrHost,
            protocol: hmrProtocol ?? "wss",
            clientPort: hmrClientPort ?? 443,
          }
        : undefined,
    },
    base: ghPagesBase,
    ...(isGitHubActions
      ? {
        build: {
          outDir: ".output",
        },
        environments: {
          client: {
            build: {
              outDir: ".output/public",
            },
          },
          ssr: {
            build: {
              outDir: ".output/server",
            },
          },
        },
      }
      : {}),
  },
  tanstackStart: {
    router: {
      basepath: routerBasepath,
    },
    ...(isGitHubActions ? { spa: { enabled: true } } : {}),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
