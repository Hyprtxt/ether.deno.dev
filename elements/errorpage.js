import { html } from "../gaslight.js";
import { Layout } from "./layout.js";

export const ErrorPage = ({ title, err }) => html`
  <${Layout} ...${{ modules: [] }}>
    <div>
      <h1>500 (The server didn't like that)</h1>
      <p>${title}</p>
      <div class="alert alert-warning">
        <pre>${err.stack}</pre>
      </div>
      <p>Whoops!</p>
    </div>
  <//>
`;

ErrorPage.defaultProps = {
  title: "",
  err: {},
};
