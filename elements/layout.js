import { html } from "../gaslight.js";
import { Bootstrap5 } from "./bootstrap5.js";

const MenuLink = ({ href, url, children }) => {
  let className = "nav-link";
  // console.log(url);
  if (url) {
    const urlObj = new URL(url);
    // console.log(urlObj);
    className = urlObj.pathname === href ? "nav-link active" : "nav-link ";
  }
  return html`<a class=${className} href=${href}>${children}</a>`;
};

export const Layout = (props) => {
  const { children, styles, scripts, modules, active, title, url } = props;
  const base_styles = ["/css/style.css"];
  const base_scripts = [];
  const base_modules = [];
  const render_styles = base_styles.concat(styles);
  const render_scripts = base_scripts.concat(scripts);
  const render_modules = base_modules.concat(modules);
  return html`
    <${Bootstrap5}
      title=${title}
      styles=${render_styles}
      scripts=${render_scripts}
      modules=${render_modules}
    >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">gaslight.dev</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <${MenuLink} href="#">Link<//>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                  >Disabled</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container mt-5">${children}</div>
    <//>
  `;
};
