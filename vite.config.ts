import { cloudflare } from "@cloudflare/vite-plugin";
import mdxPlugin from "fumadocs-mdx/vite";
import vinext from "vinext";
import { defineConfig } from "vite";
import * as sourceConfig from "./source.config";

export default defineConfig({
  plugins: [
    await mdxPlugin(sourceConfig),
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
  resolve: {
    dedupe: [
      "fumadocs-core",
      "fumadocs-ui",
      "react",
      "react-dom",
    ],
  },
  ssr: {
    noExternal: [
      "fumadocs-core",
      "fumadocs-ui",
    ],
  },
});
