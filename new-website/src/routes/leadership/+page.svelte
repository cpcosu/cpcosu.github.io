<script>
  import { clubEmail, discordLink } from "$lib/info";
  import {
    leadership17,
    leadership18,
    leadership19,
    leadership20,
    leadership21,
    leadership22,
    leadership23,
    leadership25,
    leadership26,
  } from "$lib/leadership/leadership";
  import LeadershipTeam from "$lib/leadership/LeadershipTeam.svelte";
</script>

<svelte:head>
  <title>Leadership</title>
</svelte:head>

<div class="content">
  <h1>Leadership</h1>
  <p>
    You can ask questions on the <a href={discordLink}>club Discord channel</a>
    or you can email the leadership team at
    <a href="mailto:{clubEmail}">{clubEmail}</a>.
  </p>
  <p>To contact particular leadership members, see the directory below.</p>

  <hr />
  <LeadershipTeam title={"Current ('26-'27)"} leaders={leadership26} />
  <hr />
  <h1>Previous</h1>
  <LeadershipTeam title={"'25-'26"} leaders={leadership25} />
  <LeadershipTeam title={"'23-'24"} leaders={leadership23} />
  <LeadershipTeam title={"'22-'23"} leaders={leadership22} />
  <LeadershipTeam title={"'21-'22"} leaders={leadership21} />
  <LeadershipTeam
    title={"'20-'21"}
    leaders={leadership20}
    note={"Historical note: This semester, the club rebranded from ACM to CPC."}
  />
  <LeadershipTeam title={"'19-'20"} leaders={leadership19} />
  <LeadershipTeam title={"'19 SP"} leaders={leadership18} />
  <LeadershipTeam title={"'17-'18 + ('18 AU)"} leaders={leadership17} />
  <hr />
  <!-- <LeadershipTeam title={"'24"} leaders={leadership24} />
  <hr /> -->
</div>

<style>
  hr {
    margin: 30px 0;
  }
</style>
