import { html } from "../gaslight.js";
import { HeadMeta } from "./head_meta.js";

export const Document = (props) => {
  const { title, styles, scripts, modules, children } = props;
  return html`<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>${title}</title>
      <!-- <script type="module">
        ${'document.documentElement.classList.remove("no-js");'};
        ${'document.documentElement.classList.add("js");'};
      </script> -->
      ${styles &&
      styles.map((path, index) =>
        path ? html`<link rel="stylesheet" href=${path} key=${index} />` : null
      )}
      <${HeadMeta} title=${title} />
    </head>
    <body>
      ${children}
      ${scripts &&
      scripts.map((path, index) =>
        path ? html`<script src=${path} key=${index}></script>` : null
      )}
      ${modules &&
      modules.map(
        (path, index) =>
          html`<script src=${path} type="module" key=${index}></script>`
      )}
    </body>
  </html>`;
};

Document.defaultProps = {
  title: "DefaultPropts Title",
  styles: [],
  scripts: [],
  modules: [],
};
