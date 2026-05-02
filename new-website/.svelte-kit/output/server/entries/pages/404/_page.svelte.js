import { h as head, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>404 😔</title>`;
  });
  $$payload.out += `<h1>404</h1> <p>Sorry, that page doesn't exist (anymore, at least). The <a${attr("href", `${stringify(base)}/`)}>home page</a> may help you find what you need.</p> <p>If you think this page <em>should</em> exist, please <a${attr("href", `${stringify(base)}/leadership`)}>let us know</a>!</p>`;
}
export {
  _page as default
};
