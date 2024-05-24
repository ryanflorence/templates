import { vitePlugin as remix } from "@react-router/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "./tmp-adapter/plugin";

export default defineConfig({
  plugins: [remix(), netlifyPlugin(), tsconfigPaths()],
});
