let API_BASE = Deno.env.get("API_BASE");
if (API_BASE === undefined) {
  API_BASE = "http://localhost:1337";
  // API_BASE = "https://api.gaslight.dev";
}

let COOKIE_DOMAIN = Deno.env.get("COOKIE_DOMAIN");
if (COOKIE_DOMAIN === undefined) {
  COOKIE_DOMAIN = "localhost";
}

let URL_BASE = Deno.env.get("URL_BASE");
if (URL_BASE === undefined) {
  const isLocalMode = () =>
    import.meta.url.split(":")[0] === "file" ? true : false;
  URL_BASE = isLocalMode() ? "http://localhost:8081" : "https://gaslight.dev";
}

const GTM_ID = "GTM-MTZBBFX";

export { API_BASE, COOKIE_DOMAIN, URL_BASE, GTM_ID };
