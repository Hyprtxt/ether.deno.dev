let URL_BASE = Deno.env.get("URL_BASE");
if (URL_BASE === undefined) {
  const isLocalMode = () =>
    import.meta.url.split(":")[0] === "file" ? true : false;
  URL_BASE = isLocalMode()
    ? "http://localhost:8081"
    : "https://simple.gaslight.dev";
}

export { URL_BASE };
