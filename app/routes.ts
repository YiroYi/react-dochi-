import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.jsx"),
    route("contact", "routes/contact.jsx"),
    route("hooks", "routes/hooks.jsx")
] satisfies RouteConfig;
