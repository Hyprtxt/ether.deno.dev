import { html } from "../gaslight.js";
import { Layout } from "./layout.js";

export const HomePage = (props) =>
  html`<${Layout}
    ...${{
      ...props,
      scripts: "https://unpkg.com/web3@1.3.6/dist/web3.min.js",
      modules: ["js/script.js"],
    }}
    ><p>Welcome!</p><//
  >`;
