import { html } from "../gaslight.js";
import { Layout } from "./layout.js";

export const HomePage = ({ children }) =>
  html`<${Layout}
    ><p>Welcome!</p>
    ${children}<//
  >`;
