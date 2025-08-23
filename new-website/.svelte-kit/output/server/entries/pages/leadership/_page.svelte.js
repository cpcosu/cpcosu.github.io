import { d as attr, h as escape_html, j as bind_props, f as stringify, k as ensure_array_like, i as head } from "../../../chunks/index.js";
import { d as discordLink, c as clubEmail } from "../../../chunks/info.js";
import { b as base } from "../../../chunks/paths.js";
const leadership25 = [
  {
    fullName: "Ayden Coughlin",
    position: "President",
    socials: {
      email: "coughlin.166@osu.edu",
      githubHandle: "iuaphe",
      discordHandle: "iuaphe"
    }
  },
  {
    fullName: "Trevor Pribis",
    position: "Vice President",
    socials: {
      email: "pribis.1@osu.edu",
      githubHandle: "tjbuddy100",
      discordHandle: "tjbuddy100"
    }
  },
  {
    fullName: "Patrick Carraway",
    position: "Treasurer",
    socials: {
      email: "carraway.17@osu.edu",
      discordHandle: "petreck"
    }
  }
];
function Social($$payload, $$props) {
  let iconUrl = $$props["iconUrl"];
  let name = $$props["name"];
  let handle = $$props["handle"];
  let url = $$props["url"];
  if (handle !== void 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<li class="svelte-1urn1dj">`;
    if (url !== void 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", iconUrl)}${attr("alt", `The social icon for ${stringify(name)}.`)} class="svelte-1urn1dj"/> <a${attr("href", url)} target="_blank" class="svelte-1urn1dj"><span>${escape_html(handle)}</span></a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<img${attr("src", iconUrl)}${attr("alt", `The social icon for ${stringify(name)}.`)} class="svelte-1urn1dj"/> <span>${escape_html(handle)}</span>`;
    }
    $$payload.out += `<!--]--></li>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { iconUrl, name, handle, url });
}
function LeadershipTeam($$payload, $$props) {
  let title = $$props["title"];
  let leaders = $$props["leaders"];
  const each_array = ensure_array_like(leaders);
  $$payload.out += `<h2>${escape_html(title)}</h2> <ul class="leaders svelte-1nqb1qk"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let leader = each_array[$$index];
    $$payload.out += `<li class="leader"><p class="leader-name svelte-1nqb1qk">${escape_html(leader.fullName)}</p> <p class="leader-position svelte-1nqb1qk">${escape_html(leader.position)}</p> <div class="socials svelte-1nqb1qk">`;
    Social($$payload, {
      name: "Email",
      iconUrl: "/email-mark.svg",
      handle: leader.socials.email,
      url: `mailto:${stringify(leader.socials.email)}`
    });
    $$payload.out += `<!----> `;
    Social($$payload, {
      name: "GitHub",
      iconUrl: "/github-mark.svg",
      handle: leader.socials.githubHandle,
      url: `https://github.com/${stringify(leader.socials.githubHandle)}`
    });
    $$payload.out += `<!----> `;
    Social($$payload, {
      name: "LinkedIn",
      iconUrl: `${stringify(base)}/linkedin-mark.svg`,
      handle: leader.socials.linkedInHandle,
      url: `https://linkedin.com/in/${stringify(leader.socials.linkedInHandle)}`
    });
    $$payload.out += `<!----> `;
    Social($$payload, {
      name: "Discord",
      iconUrl: `${stringify(base)}/discord-mark-blue.svg`,
      handle: leader.socials.discordHandle,
      url: void 0
    });
    $$payload.out += `<!----></div></li>`;
  }
  $$payload.out += `<!--]--></ul>`;
  bind_props($$props, { title, leaders });
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Leadership</title>`;
  });
  $$payload.out += `<h1>Leadership</h1> <p>You can ask questions on the <a${attr("href", discordLink)}>club Discord channel</a> or you can email the
	leadership team at <a${attr("href", `mailto:${stringify(clubEmail)}`)}>${escape_html(clubEmail)}</a>.</p> <p>To contact particular leadership members, see the directory below.</p> <hr class="svelte-d84m39"/> `;
  LeadershipTeam($$payload, { title: "'25 (Current)", leaders: leadership25 });
  $$payload.out += `<!----> <hr class="svelte-d84m39"/>`;
}
export {
  _page as default
};
