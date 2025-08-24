<script>
  import { clubEmail, discordLink } from "$lib/info";
  import { leadership25 } from "$lib/leadership/leadership";
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
  <LeadershipTeam title={"'25 (Current)"} leaders={leadership25} />
  <hr />
  <!-- <LeadershipTeam title={"'24"} leaders={leadership24} />
  <hr /> -->
</div>

<style>
  hr {
    margin: 30px 0;
  }
</style>
