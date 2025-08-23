import { i as head, d as attr, f as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { d as discordLink } from "../../chunks/info.js";
/* empty css                */
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>CPC@OSU</title>`;
  });
  $$payload.out += `<div class="split svelte-cml0m"><div class="header-wrap svelte-cml0m"><div class="header svelte-cml0m"><div class="title svelte-cml0m"><span class="title-element pre-bracket svelte-cml0m">Competitive</span> <span class="title-element svelte-cml0m">Programming</span> <span class="title-element post-bracket svelte-cml0m">Club</span></div> <div class="buttons svelte-cml0m"><div class="button-container svelte-cml0m"><a${attr("href", `${stringify(base)}/about`)} class="svelte-cml0m">About</a></div> <div class="button-container svelte-cml0m"><a${attr("href", `${stringify(base)}/schedule`)} class="svelte-cml0m">Schedule</a></div> <div class="button-container svelte-cml0m"><a${attr("href", `${stringify(base)}/leadership`)} class="svelte-cml0m">Contact</a></div></div></div></div> <div class="image svelte-cml0m"><img${attr("src", `${stringify(base)}/logo-no-text.svg`)} alt="The BPC logo" class="svelte-cml0m"/></div></div> <div class="content svelte-cml0m"><hr/> <h1 class="svelte-cml0m">About</h1> <p>Our purpose is to teach our members about data structures and algorithms and prepare them for
		programming competitions. We give lectures, host events, invite guest speakers to talk, and
		participate in <a${attr("href", `${stringify(base)}/icpc`)}>international competitions</a>. For more detailed information, check out <a${attr("href", `${stringify(base)}/about`)}>the about page</a>.</p> <hr/> <h1 class="svelte-cml0m">Meetings</h1> <p>This semester we have a meeting every Thursday, usually from 7:00 PM to 8:00 PM. The room and
		time vary — check the <a${attr("href", `${stringify(base)}/schedule`)}>schedule</a> for specific information. You can
		also join <a${attr("href", discordLink)}>our Discord server</a> to stay updated on when and where the meets
		are.</p> <hr/> <h1 class="svelte-cml0m">Contact</h1> <p>Have a different question about the club? Interested in getting involved with the leadership
		team? Want to sponsor us? Get in touch with the <a${attr("href", `${stringify(base)}/leadership`)}>leadership team</a>.</p> <hr/></div>`;
}
export {
  _page as default
};
