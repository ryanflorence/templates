import type { VitePluginConfig } from "@react-router/dev";

export const config: VitePluginConfig = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildFile: "./.netlify/functions-internal/server.mjs",
  serverModuleFormat: "esm",
};
