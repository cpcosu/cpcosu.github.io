import { i as head, d as attr, f as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { d as discordLink } from "../../chunks/info.js";
/* empty css                */
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>CPC@OSU</title>`;
  });
  $$payload.out += `<div class="split svelte-ve4w8q"><div class="header-wrap svelte-ve4w8q"><div class="header svelte-ve4w8q"><div class="title svelte-ve4w8q"><span class="title-element pre-bracket svelte-ve4w8q">Competitive</span> <span class="title-element svelte-ve4w8q">Programming</span> <span class="title-element post-bracket svelte-ve4w8q">Club</span></div> <div class="buttons svelte-ve4w8q"><div class="button-container svelte-ve4w8q"><a${attr("href", `${stringify(base)}/about`)} class="svelte-ve4w8q">About</a></div> <div class="button-container svelte-ve4w8q"><a${attr("href", `${stringify(base)}/schedule`)} class="svelte-ve4w8q">Schedule</a></div> <div class="button-container svelte-ve4w8q"><a${attr("href", `${stringify(base)}/leadership`)} class="svelte-ve4w8q">Contact</a></div></div></div></div> <div class="image svelte-ve4w8q"><img${attr("src", `${stringify(base)}/logo-no-text.svg`)} alt="The BPC logo" class="svelte-ve4w8q"/></div></div> <div class="content svelte-ve4w8q"><hr/> <h1 class="svelte-ve4w8q">About</h1> <p>Our purpose is to teach our members about data structures and algorithms and
    prepare them for programming competitions. We give lectures, host events,
    invite guest speakers to talk, and participate in <a${attr("href", `${stringify(base)}/icpc`)}>international competitions</a>. For more detailed
    information, check out <a${attr("href", `${stringify(base)}/about`)}>the about page</a>.</p> <hr/> <h1 class="svelte-ve4w8q">Meetings</h1> <p>This semester we have a meeting every Thursday, usually from 7:00 PM to 8:00
    PM. The room and time vary — check the <a${attr("href", `${stringify(base)}/schedule`)}>schedule</a> for specific information. You can also join <a${attr("href", discordLink)}>our Discord server</a> to stay updated on when and where
    the meets are.</p> <hr/> <h1 class="svelte-ve4w8q">Contact</h1> <p>Have a different question about the club? Interested in getting involved
    with the leadership team? Want to sponsor us? Get in touch with the <a${attr("href", `${stringify(base)}/leadership`)}>leadership team</a>.</p> <hr/></div>`;
}
export {
  _page as default
};
