import { html } from "../gaslight.js";
import { Document } from "./document.js";

export const Bootstrap5 = (props) => {
  const { styles, scripts, modules, children } = props;
  const base_styles = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css",
  ];
  const base_scripts = [
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js",
  ];

  const base_modules = [];
  const render_styles = base_styles.concat(styles);
  const render_scripts = base_scripts.concat(scripts);
  const render_modules = base_modules.concat(modules);
  const bootstrapProps = Object.assign(props, {
    styles: render_styles,
    scripts: render_scripts,
    modules: render_modules,
  });
  return html`<${Document} ...${bootstrapProps}>${children}<//>`;
};

Bootstrap5.defaultProps = {
  styles: [],
  scripts: [],
  modules: [],
};
