import { h as head, d as attr, f as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>ICPC</title>`;
  });
  $$payload.out += `<h1>The International Collegiate Programming Competition</h1> <img${attr("src", `${stringify(base)}/image/ecna24.jpg`)} alt="" class="svelte-19rnwgt"/> <div class="after-image svelte-19rnwgt"></div> <p>ICPC is an annual international programming competition that we participate in. The competition
	has multiple levels, and participants that do the best at each level advance to the next. For more
	detailed information, visit <a href="https://icpc.global/">ICPC's website</a>. Feel free to <a${attr("href", `${stringify(base)}/leadership`)}>direct any questions at the club's leadership team</a>.</p> <h2>Format</h2> <p>ICPC consists of multiple contests at different levels of regionality. Each contest has roughly
	the same format: teams of three attempt solve a set of around 10 programming problems. Teams are
	scored by how many problems they have solved, and in the case of ties, the faster team has a high
	score; hence, both correctness and speed are important.</p> <p>The problems in ICPC contests cover a large variety of topics. To get a sense of what the typical
	contest looks like at any level, you can check out previous years' contests. An archive of these
	contests is available at <a href="https://qoj.ac/category/19">QOJ.ac</a> or <a href="https://icpcarchive.github.io/">icpcarchive.github.io</a>.</p> <h2>Contest Levels</h2> <p>There are four different levels to the competition, which correspond to the university, regional,
	national, and international scale.</p> <h3>North American Qualifier (NAQ)</h3> <p>NAQ is a local contest that our club (CPC) participates in in order to select which students will
	advance to the regional contest, ECNA. We'll announce more about NAQ as it approaches (usually in
	around the middle of the autumn semester).</p> <h3>East Central North America (ECNA)</h3> <p>ECNA is a regional contest that takes place somewhere in the East Central region of North America.
	The club will bring students that performed the best at NAQ to this contest. The exact number of
	people we send depends on the budget, but we typically send three to four teams. Historically,
	opposition at this contest has included Carnegie Mellon University, University of Waterloo,
	University of Michigan, University of Toronto, Purdue University, and others, so it is quite
	competitive.</p> <h3>North American Championship (NAC) and World Finals (WF)</h3> <p>The best teams of the United States regional competitions advance to the North American
	Championship, the second to last level of the contest. Those that do well at this incredibly
	competitive contest advance to the World Finals to compete with the best in the world. Ohio State
	has advanced to the North American Championship a few times, but we've only reached the World
	Finals one time in 2016. Your team could be the next!</p>`;
}
export {
  _page as default
};
