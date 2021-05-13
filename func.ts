import { URL_BASE } from "./config.ts";
import { html } from "./gaslight.js";
import { ErrorPage } from "./elements/errorpage.js";
import { PathParams } from "./sift.ts";

const withDoctype = (html: string) => "<!DOCTYPE html>" + html;

export const renderHook = (html: any) => {
  return withDoctype(html);
};

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
