import { k as ensure_array_like, i as head, l as attr_class, h as escape_html } from "../../../chunks/index.js";
function _page($$payload) {
  const meetings = [
    {
      title: "Lecture: Welcome to CPC!",
      date: "Aug 28",
      time: "7:00PM - 8:00PM",
      room: "Hitchcock 031",
      recordingLink: void 0
    },
    {
      title: "Lecture: The Basics",
      date: "Sep 4",
      time: "7:00PM - 8:00PM",
      room: "Hitchcock 031",
      recordingLink: void 0
    },
    {
      title: "Workday",
      date: "Sep 11",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    },
    {
      title: "Workday",
      date: "Sep 18",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    },
    {
      title: "Contest: The Basics",
      date: "Sep 25",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    },
    {
      title: void 0,
      date: "Oct 2",
      time: "7:00PM - 8:00PM",
      room: "Hitchcock 031",
      recordingLink: void 0
    },
    {
      title: void 0,
      date: "Oct 9",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    },
    {
      title: void 0,
      date: "Oct 23",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    },
    {
      title: void 0,
      date: "Oct 30",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    },
    {
      title: void 0,
      date: "Nov 6",
      time: "7:30PM - 8:30PM*",
      room: "Hitchcock 031",
      recordingLink: void 0
    },
    {
      title: void 0,
      date: "Nov 13",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    },
    {
      title: void 0,
      date: "Nov 20",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    },
    {
      title: void 0,
      date: "Dec 4",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: void 0
    }
  ];
  let upcoming = 0;
  const each_array = ensure_array_like(meetings);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Schedule</title>`;
  });
  $$payload.out += `<div class="content"><h1>Schedule</h1> <p>This schedule is <em>tentative and subject to change</em>, but it should be up-to-date for at
		least the next event. The upcoming meeting is in <strong>bold</strong>.</p> <table class="svelte-m662nd"><thead><tr><th scope="col" class="svelte-m662nd">Date</th><th scope="col" class="svelte-m662nd">Time</th><th scope="col" class="svelte-m662nd">Title</th><th scope="col" class="svelte-m662nd">Room</th><th scope="col" class="svelte-m662nd">Recording Link</th></tr></thead><tbody class="svelte-m662nd"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let meeting = each_array[i];
    $$payload.out += `<tr${attr_class("svelte-m662nd", void 0, { "upcoming": i === upcoming })}><td class="svelte-m662nd">${escape_html(meeting.date)}</td><td class="svelte-m662nd">${escape_html(meeting.time)}</td>`;
    if (meeting.title !== void 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<td class="svelte-m662nd">${escape_html(meeting.title)}</td>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<td class="tbd svelte-m662nd">(to be determined)</td>`;
    }
    $$payload.out += `<!--]--><td class="svelte-m662nd">${escape_html(meeting.room)}</td><td class="svelte-m662nd">${escape_html(meeting.recordingLink)}</td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table> <p>* This is the only meeting outside of the usual 7-8 time slot.</p></div>`;
}
export {
  _page as default
};
