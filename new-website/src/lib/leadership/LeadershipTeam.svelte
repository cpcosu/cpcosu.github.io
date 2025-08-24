<script lang="ts">
  import { base } from "$app/paths";
  import { clubEmail } from "$lib/info";
  import type { Leader } from "./leadership";
  import Social from "./Social.svelte";

  export let title: string;
  export let leaders: Leader[];
</script>

<h2>{title}</h2>
<ul class="leaders">
  {#each leaders as leader}
    <li class="leader">
      <p class="leader-name">{leader.fullName}</p>
      <p class="leader-position">{leader.position}</p>
      <!-- <p>{leader.socials}</p> -->
      <div class="socials">
        <Social
          name={"Email"}
          iconUrl={"/email-mark.svg"}
          handle={leader.socials.email}
          url="mailto:{leader.socials.email}"
        />
        <Social
          name={"GitHub"}
          iconUrl={"/github-mark.svg"}
          handle={leader.socials.githubHandle}
          url="https://github.com/{leader.socials.githubHandle}"
        />
        <Social
          name={"LinkedIn"}
          iconUrl="{base}/linkedin-mark.svg"
          handle={leader.socials.linkedInHandle}
          url="https://linkedin.com/in/{leader.socials.linkedInHandle}"
        />
        <Social
          name={"Discord"}
          iconUrl="{base}/discord-mark-blue.svg"
          handle={leader.socials.discordHandle}
          url={undefined}
        />
      </div>
    </li>
  {/each}
</ul>

<style lang="scss">
  @import "$lib/shared";

  .leaders {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
    list-style-type: none;
    padding: 0;
    margin: 0;
    row-gap: 50px;
  }

  .leader-name {
    margin: 0;
    color: $scarlet;
    font-weight: bold;
    font-size: large;
  }

  .leader-position {
    margin: 0;
    color: #838383;
  }

  .socials {
    margin-top: 15px;
  }
</style>
