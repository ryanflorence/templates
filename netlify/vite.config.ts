import { vitePlugin as react } from "@react-router/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react({
      ssr: false,
      routes(defineRoutes) {
        return defineRoutes(route => {
          route(undefined, "./home.tsx", { index: true });
        });
      },
    }),
    tsconfigPaths(),
  ],
});
