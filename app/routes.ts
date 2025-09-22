import { type RouteConfig, route, index, prefix } from "@react-router/dev/routes";
export default [
  ...prefix("pages",
    [
      route("home", "./routes/home.tsx"),
      route("1", "./routes/1.tsx"),
      route("2", "./routes/2.tsx"),
      route("3", "./routes/3.tsx"),
    ])
  ] satisfies RouteConfig;