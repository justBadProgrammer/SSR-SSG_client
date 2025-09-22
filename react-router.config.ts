import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  
  // ssr: true, // SSR
  // basename: '/ssr/react-router-example/v1/' //custom basename for ssr (equal to vite.config.ts "base")
 
  ssr: false, // SSG/SPA
  basename: '/ssg/react-router-example/v1/' //custom basename for ssr (equal to vite.config.ts "base")

} satisfies Config;
