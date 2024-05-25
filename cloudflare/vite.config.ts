import {
  vitePlugin as react,
  cloudflareDevProxyVitePlugin,
} from "@react-router/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [cloudflareDevProxyVitePlugin(), react(), tsconfigPaths()],
});
