import { PathParams, json, serve } from "./sift.ts";
import { renderPage, serveStatic } from "./func.ts";
import { HomePage } from "./elements/homepage.js";

serve({
  "/": (r, p) =>
    renderPage(HomePage, {
      url: r.url,
      title: "Gaslight",
      cannonical: "https://gaslight.dev",
      description: "Something",
    }),
  "/json": () => json({ is: "a_webserver" }),
  "/favicon.ico": serveStatic("public/favicon.ico"),
  "/js/:filename+": serveStatic("public/js"),
  "/css/:filename+": serveStatic("public/css"),
  404: () => json({ is: "not_found" }, { status: 404 }),
});
