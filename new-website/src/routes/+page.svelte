<script lang="ts">
  import { base } from "$app/paths";
  import { discordLink } from "$lib/info";
  import "$lib/main.scss";
</script>

<svelte:head>
  <title>CPC@OSU</title>
</svelte:head>

<div class="split">
  <div class="header-wrap">
    <div class="header">
      <div class="title">
        <span class="title-element pre-bracket">Competitive</span>
        <span class="title-element">Programming</span>
        <span class="title-element post-bracket">Club</span>
      </div>
      <div class="buttons">
        <div class="button-container">
          <a href="{base}/about">About</a>
        </div>
        <div class="button-container">
          <a href="{base}/schedule">Schedule</a>
        </div>
        <div class="button-container">
          <a href="{base}/leadership">Contact</a>
        </div>
      </div>
    </div>
  </div>
  <div class="image">
    <img src="{base}/logo-no-text.svg" alt="The BPC logo" />
  </div>
</div>

<div class="content">
  <hr />
  <h1>About</h1>
  <p>
    Our purpose is to teach our members about data structures and algorithms and
    prepare them for programming competitions. We give lectures, host events,
    invite guest speakers to talk, and participate in
    <a href="{base}/icpc">international competitions</a>. For more detailed
    information, check out
    <a href="{base}/about">the about page</a>.
  </p>
  <hr />
  <h1>Meetings</h1>
  <p>
    This semester we have a meeting every Thursday, usually from 7:00 PM to 8:00
    PM. The room and time vary — check the <a href="{base}/schedule">schedule</a
    >
    for specific information. You can also join
    <a href={discordLink}>our Discord server</a> to stay updated on when and where
    the meets are.
  </p>
  <hr />
  <h1>Contact</h1>
  <p>
    Have a different question about the club? Interested in getting involved
    with the leadership team? Want to sponsor us? Get in touch with the <a
      href="{base}/leadership">leadership team</a
    >.
  </p>
  <hr />
</div>

<style lang="scss">
  @import "$lib/shared";

  // TODO: fix this nonsense

  @media (min-width: 801px) {
    .split {
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .header-wrap {
        display: flex;
        align-items: center;
        justify-content: end;
      }
      .image {
        display: flex;
        align-items: center;
        justify-content: start;
        img {
          display: block;
          width: 80%;
        }
      }
    }

    .header {
      padding: 0 30px;
      .title {
        display: flex;
        flex-direction: column;
      }
    }

    .button-container {
      &:first-child {
        margin-left: auto;
      }
      &:last-child {
        margin-right: auto;
      }
    }
    .title-element {
      color: $scarlet;
      font-size: 60px;
      font-family: "Roboto Mono", serif;
      position: relative;
      &.pre-bracket::before {
        position: absolute;
        left: -50px;
        content: "{";
        color: #999;
      }
      &.post-bracket::after {
        position: absolute;
        left: 160px;
        content: "}";
        color: #999;
      }
      text-shadow: 5px 5px #e6e6e6;
    }
  }

  @media (max-width: 800px) {
    .split {
      display: flex;
      flex-direction: column-reverse;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      margin: auto;
      margin-top: 20px;
      padding: 0 15px;
    }
    .button-container {
      &:first-child {
        margin-left: auto;
      }
      &:last-child {
        margin-right: auto;
      }
    }
    .title-element {
      color: $scarlet;
      font-size: 40px;
      font-family: "Roboto Mono", serif;
      position: relative;
      &.pre-bracket::before {
        position: absolute;
        left: -40px;
        content: "{";
        color: #999;
      }
      &.post-bracket::after {
        position: absolute;
        left: 110px;
        content: "}";
        color: #999;
      }
      text-shadow: 5px 5px #e6e6e6;
    }
    .title {
      margin: auto;
      margin-bottom: 20px;
      max-width: 264px;
      display: flex;
      flex-direction: column;
    }
  }

  .big-cool-text {
    text-align: center;
  }

  .buttons {
    margin: 0px 0 40px 0;
    a {
      background: none;
      border: none;

      text-decoration: none;
      color: white;
      background-color: #333;
      padding: 10px;
    }
  }

  img {
    width: 100%;
  }

  .button-container {
    margin: 20px 15px;
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.05);
    }
    a {
      color: white;
      padding: 10px;
      border-radius: 5px;
      font-family: "Roboto Mono", serif;
      transition: filter 0.3s;
      &:hover {
        filter: brightness(1.3);
      }
    }
  }

  h1 {
    text-align: center;
  }

  .content {
    max-width: 800px;
    font-size: 1.3em;
  }
</style>
