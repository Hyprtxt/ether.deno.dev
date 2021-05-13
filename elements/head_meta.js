import { html } from "../gaslight.js";

export const HeadMeta = ({ title, description, canonical }) =>
  html`
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    ${title && title != ""
      ? html`<meta property="og:title" content=${title} />`
      : null}
    ${description && description != ""
      ? html`<meta name="description" content=${description} />
          <meta property="og:description" content=${description} />`
      : null}
    ${canonical && canonical != ""
      ? html`<meta property="og:url" content=${canonical} />
          <link rel="canonical" href=${canonical} />`
      : null}
    <link rel="icon" href="/favicon.ico" />
  `;

HeadMeta.defaultProps = {
  title: "",
  description: "",
  canonical: "",
};

{
  // More stuff for later
  /*
  <meta property="og:image" content="https://www.mywebsite.com/image.jpg" />
  <meta property="og:image:alt" content="Image description" />
  <meta name="twitter:card" content="summary_large_image" />

  // Half done...
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/my.webmanifest" />
  <meta name="theme-color" content="#FF00FF" /> */
}
