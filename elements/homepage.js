import { html } from "../gaslight.js";
import { Layout } from "./layout.js";

export const HomePage = (props) =>
  html`<${Layout} ...${props}><p>Welcome!</p><//>`;
