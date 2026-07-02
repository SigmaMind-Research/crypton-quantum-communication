// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const ghPagesBase =
  process.env.GITHUB_ACTIONS === "true" && repoName ? `/${repoName}/` : "/";
const routerBasepath =
  ghPagesBase.endsWith("/") && ghPagesBase.length > 1
    ? ghPagesBase.slice(0, -1)
    : ghPagesBase;

export default defineConfig({
  vite: {
    // Required for project-site GitHub Pages URLs: /<repo>/
    base: ghPagesBase,
    build: {
      outDir: ".output",
    },
    environments: {
      client: {
        build: {
          outDir: ".output/public",
        },
      },
      server: {
        build: {
          outDir: ".output/server",
        },
      },
    },
  },
  tanstackStart: {
    router: {
      basepath: routerBasepath,
    },
    spa: {
      enabled: true,
    },
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
