import { PathParams, json, serve } from "./sift.ts";
import { ErrorPage } from "./elements/errorpage.js";
import { HomePage } from "./elements/homepage.js";
import { URL_BASE } from "./config.ts";
import { html } from "./gaslight.js";

export const serveStatic = (relativePath: string) => {
  return async (request: Request, params?: PathParams): Promise<Response> => {
    let filePath = relativePath;
    if (params && params.filename) {
      if (Array.isArray(params.filename)) {
        params.filename = params.filename.join("/");
      }
      filePath = relativePath.endsWith("/")
        ? relativePath + params.filename
        : relativePath + "/" + params.filename;
    }
    const fileUrl = new URL(filePath, URL_BASE).toString();
    return new Response(null, {
      headers: {
        location: fileUrl,
      },
      // This is excellent for development
      status: 302,
    });
  };
};

export const withDoctype = (html: string) => "<!DOCTYPE html>" + html;

export const renderHook = (html: any) => {
  return withDoctype(html);
};

export const renderPage = (Page: any, props?: any) => {
  let result;
  let status = 200;
  try {
    result = html`<${Page} ...${props}><//>`;
  } catch (err) {
    // Developer Error Page
    console.error("Render Error", err);
    status = 500;
    result = html`<${ErrorPage}
      ...${{ title: "Template Rendering Error (Server Side)", err }}
    ><//>`;
  }
  if (typeof result !== "string") {
    result = html`<${ErrorPage}
      ...${{
        title: "Template Rendering Error (Not a string, element error)",
        err: {
          stack: JSON.stringify(result, null, 2),
        },
      }}
    ><//>`;
  }
  // console.log("OKAY", result, typeof result, typeof result !== "string");
  return new Response(renderHook(result), {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};

serve({
  "/": () => renderPage(HomePage, { children: html`<p>Welcome MNESSAGE</p>` }),
  "/json": () => json({ is: "a_webserver" }),
  "/favicon.ico": serveStatic("public/favicon.ico"),
  "/js/:filename+": serveStatic("public/js"),
  "/css/:filename+": serveStatic("public/css"),
  404: () => json({ is: "not_found" }, { status: 404 }),
});
