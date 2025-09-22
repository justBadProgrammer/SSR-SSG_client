import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(
  {
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  base: '/ssg/react-router-example/v1/', //custom basename (ssg build) (equal to react-router.config.ts "basename")
  // base: '/ssr/react-router-example/v1/', //custom basename (ssr build) (equal to react-router.config.ts "basename")
  });
