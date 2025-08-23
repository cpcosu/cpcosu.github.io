import { d as attr, e as slot, f as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                */
function _layout($$payload, $$props) {
  $$payload.out += `<header class="svelte-1851gbt"><div class="header-content svelte-1851gbt"><div class="left-part svelte-1851gbt"><a${attr("href", `${stringify(base)}/`)} class="acronym svelte-1851gbt"><span class="red svelte-1851gbt">CPC</span><span class="gray svelte-1851gbt">@</span><span class="red svelte-1851gbt">OSU</span></a></div> <div class="right-links svelte-1851gbt"><a${attr("href", `${stringify(base)}/about`)} class="svelte-1851gbt">About</a> <a${attr("href", `${stringify(base)}/schedule`)} class="svelte-1851gbt">Schedule</a> <a${attr("href", `${stringify(base)}/icpc`)} class="svelte-1851gbt">ICPC</a> <a${attr("href", `${stringify(base)}/leadership`)} class="svelte-1851gbt">Leadership</a></div></div></header> <main><div class="content"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></main>`;
}
export {
  _layout as default
};
