<script lang="ts">
  type Meeting = {
    title?: string;
    date: string;
    time: string;
    room: string;
    recordingLink?: string;
  };

  const meetings: Meeting[] = [
    {
      title: "Lecture: Welcome to CPC!",
      date: "Aug 28",
      time: "7:00PM - 8:00PM",
      room: "Hitchcock 031",
      recordingLink: "https://www.youtube.com/watch?v=xuWy1zqzORE",
    },
    {
      title: "Lecture: The Basics",
      date: "Sep 4",
      time: "7:00PM - 8:00PM",
      room: "Hitchcock 031",
      recordingLink: "https://www.youtube.com/watch?v=FFmd_UoqtdQ",
    },
    {
      title: "Workday",
      date: "Sep 11",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
    {
      title: "Workday",
      date: "Sep 18",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
    {
      title: "Contest: The Basics",
      date: "Sep 25",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
    {
      title: "Lecture: Graphs",
      date: "Oct 2",
      time: "7:00PM - 8:00PM",
      room: "Hitchcock 031",
      recordingLink: undefined,
    },
    {
      title: "Workday",
      date: "Oct 9",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
    {
      title: undefined,
      date: "Oct 23",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
    {
      title: undefined,
      date: "Oct 30",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
    {
      title: undefined,
      date: "Nov 6",
      time: "7:30PM - 8:30PM*",
      room: "Hitchcock 031",
      recordingLink: undefined,
    },
    {
      title: undefined,
      date: "Nov 13",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
    {
      title: undefined,
      date: "Nov 20",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
    {
      title: undefined,
      date: "Dec 4",
      time: "7:00PM - 8:00PM",
      room: "Enarson 311",
      recordingLink: undefined,
    },
  ];

  /**
   * the index of the upcoming meeting. increment by one every week.
   * this could be automated, but we're updating the site every week anyway
   * so i don't know how necessary that is.
   */
  let upcoming = 6;
</script>

<svelte:head>
  <title>Schedule</title>
</svelte:head>

<div class="content">
  <h1>Schedule</h1>
  <p>
    This schedule is <em>tentative and subject to change</em>, but it should be
    up-to-date for at least the next event. The upcoming meeting is in
    <strong>bold</strong>.
  </p>
  <table>
    <thead
      ><tr>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Title</th>
        <th scope="col">Room</th>
        <th scope="col">Recording Link</th>
      </tr></thead
    >
    <tbody>
      {#each meetings as meeting, i}
        <tr class:upcoming={i === upcoming}>
          <td>{meeting.date}</td>
          <td>{meeting.time}</td>
          {#if meeting.title !== undefined}
            <td>{meeting.title}</td>
          {:else}
            <td class="tbd">(to be determined)</td>
          {/if}
          <td>{meeting.room}</td>
          {#if meeting.recordingLink !== undefined}
            <td
              ><a target="_blank" href={meeting.recordingLink}>(YouTube)</a></td
            >
          {:else}
            <td></td>
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
  <p>* This is the only meeting outside of the usual 7-8 time slot.</p>
</div>

<style lang="scss">
  table {
    width: 100%;
    border-collapse: collapse;
    th {
      text-align: left;
      font-family: "Roboto", serif;
    }
    tbody tr:nth-child(odd) {
      background-color: #eeeeee;
    }
    td,
    th {
      padding: 10px;
    }
    th {
      border-bottom: solid black 3px;
    }
  }

  .upcoming {
    font-weight: bold;
  }

  .tbd {
    color: gray;
    font-style: italic;
  }
</style>
