import { PathParams, json, serve } from "./sift.ts";
import { renderPage, serveStatic } from "./func.ts";
import { HomePage } from "./elements/homepage.js";

serve({
  "/": (r, p) =>
    renderPage(HomePage, {
      url: r.url,
      title: "Ether Auther",
      cannonical: "https://ether.deno.dev",
      description:
        "Authenticate to a website by having some ERC20 tokens from a specified contract.",
    }),
  "/favicon.ico": serveStatic("public/favicon.ico"),
  "/js/:filename+": serveStatic("public/js"),
  "/css/:filename+": serveStatic("public/css"),
  404: () => json({ is: "not_found" }, { status: 404 }),
});
