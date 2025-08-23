import { h as head, d as attr, f as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { d as discordLink } from "../../../chunks/info.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About</title>`;
  });
  $$payload.out += `<div class="content"><h1>About</h1> <p>This page has information about our club and what we do. If you have a question we don't answer
		here, feel free to ask in <a${attr("href", discordLink)}>the Discord server</a> or to <a${attr("href", `${stringify(base)}/leadership`)}>message an officer</a>.</p> <h2>What is competitive programming?</h2> <p>Competitive programming is pretty much exactly what it sounds like. You (and a team, usually)
		compete with others to try to solve a series of programming problems as fast as you can. Doing
		well in competitive programming competitions requires a solid foundation of well-known data
		structures and algorithms as well as the ability to combine them in novel ways or to come up
		with new ones matching the particulars of a problem.</p> <h2 id="what-do-we-do">What does the Competitive Programming Club do?</h2> <p>Naturally, the primary purpose of the Competitive Programming Club is to prepare our members for
		competitive programming competitions, like <a${attr("href", `${stringify(base)}/icpc`)}>ICPC</a>. To prepare, we give
		lectures, host and participate in various practice contests, and more generally provide a time
		and space to interact with and ask questions of more experienced programmers.</p> <p>However, the skills we teach are also applicable much more broadly than just the contest
		setting! Proficiency in problem solving and knowledge of data structures and algorithms are
		essential for any personal or professional software engineering work, and many attend meetings
		just to sharpen these skills.</p> <p>We also host our own programming events here on campus. We host an annual mock-ICPC contest
		called the Buckeye Programming Competition with problems created by our leadership team. We also
		occasionally host the Arcade of Code, which is a more laid back, beginner-friendly contest
		featuring a bracket-style tournament and wacky programming challenges (like 'shortest source
		code' or 'no control flow').</p> <p>If you have any other questions about what we do, feel free to <a${attr("href", `${stringify(base)}/leadership`)}>contact the leadership team</a></p> <h2>Who can join? How can I join?</h2> <p>Anyone can attend meetings! All you have to do is show up. Upcoming events, including times and
		room numbers, can be found on the <a${attr("href", `${stringify(base)}/schedule`)}>schedule page</a>. If you're
		interested in becoming an official member on the roster, for the purpose of voting in elections
		or for any other reason, you'll need to attend at least four meetings and fill out the
		attendance form at each.</p> <h2>Do I need to bring anything to the meetings?</h2> <p>We don't have the ability to provide any technology, so you should bring your own computing
		device. A laptop works best, but you may be able to get away with a tablet like an iPad with
		some effort. Programming with a smartphone, while commendable, is extremely uncomfortable, so it
		is not recommended, nor is programming with a smart watch, VR headset, or microwave oven.</p> <p>We also recommend bringing something to write on for diagramming, which can be immensely useful
		for problem solving of any kind.</p> <h2>What is the International Collegiate Programming Competition?</h2> <p>The International Collegiate Programming Competition (or ICPC) is an international programming
		competition for college students, it turns out. We participate in the competition every year, in
		at least the regional competition, the East Central North American regional (or ECNA). We
		frequently advance beyond the regional, to the North American Championship. In order to
		represent our team at ICPC, you need to do well in the North American Qualifier contest which
		occurs during the August semester.</p> <p>For more information, check out <a${attr("href", `${stringify(base)}/icpc`)}>our page on the competition</a> or <a href="https://icpc.global/" target="_blank">ICPC's official website</a>.</p> <h2>I'd to help out with the club!</h2> <p>Thanks for your interest! Direct message someone in the <a${attr("href", `${stringify(base)}/leadership`)}>leadership team</a> and we can discuss what you're interested in and where you could contribute.</p> <h2>I have so many more questions.</h2> <p>The <a${attr("href", discordLink)}>Discord server</a> is a great place for questions! You can also check
		out the <a${attr("href", `${stringify(base)}/leadership`)}>leadership page</a> for more options.</p></div>`;
}
export {
  _page as default
};
