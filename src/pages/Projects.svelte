<script lang="ts">
  import Title from "../lib/Title.svelte";

  import Typewriter from "svelte-typewriter";
  import { Icon } from "@steeze-ui/svelte-icon";
  import Logo from "../lib/Logo.svelte";
</script>

<main>
  <div class="mt-4">
    <Title>Projects</Title>
  </div>
  <div class="flex w-full justify-center items-center flex-col mt-5">
    <div class="showcase">
      <div class="solaris mb-4">
        <h1>Solaris</h1>
        <img src="solaris.png" alt="Solaris" />
      </div>
      <div class="website">
        <Logo size="5em" />
        <h1>Website</h1>
      </div>
      <div class="scpml">
        <h1>SCP:ML</h1>
        <img src="scpml.png" alt="" />
      </div>
    </div>
  </div>
</main>

<style>
  .scpml {
    grid-area: scpml;
    border-radius: 2em;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row-reverse;

    background: linear-gradient(45deg, rgb(0, 0, 0), rgb(95, 95 ,95), rgb(172, 172, 172));
    background-size: 300% 100%;
    animation: gradient 10s linear infinite;
    animation-direction: alternate-reverse;
  }

  .scpml > img {
    height: 5em;
  }

  .website {
    height: 8em;
    background: linear-gradient(45deg, rgb(150, 0, 20), #6645e9, #4000ff);
    background-size: 300% 100%;
    animation: gradient 10s linear infinite;
    animation-direction: alternate-reverse;

    grid-area: website;
    border-radius: 2em;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row-reverse;
  }

  .website > h1 {
    font-size: 2.3em;
    margin-left: 0em;
    white-space: nowrap;
  }

  .scpml > h1 {
    font-size: 2.3em;
    margin-left: 0em;
    white-space: nowrap;
  }

  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }

  .showcase {
    width: 75%;
    display: grid;
    grid-template-columns: 40% 20% 40%;
    grid-template-rows: auto;
    grid-template-areas:
      "solaris solaris solaris"
      "website website scpml";

  }

  .showcase > div {
    margin: .3em;
  }

  .solaris {
    position: relative;
    grid-area: solaris;
    width: 100%;
    height: 8em;
    background: linear-gradient(90deg, rgb(119, 130, 0), rgb(3, 0, 50), rgb(119, 130, 0));
    background-size: 600% 100%;
    animation: gradient 16s both infinite;
    animation-direction: alternate-reverse;
    border-radius: 2em;
    padding: 1em;
  }

  .solaris > img {
    border-radius: 50%;
    position: absolute;
    height: 75%;
    right: 50%;
    transform: translateX(50%);
  }

  .solaris > h1 {
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 2.3em;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    .showcase {
      grid-template-areas:
        "solaris solaris solaris"
        "website website website"
        "scpml scpml scpml";
    }

    .solaris {
      height: 12em;
    }

    .solaris > img {
      border-radius: 50%;
      position: absolute;
      height: 40%;
      right: 50%;
      transform: translateX(50%);
    }

    .solaris > h1 {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2.3em;
    }
  }

  .scpml {
    grid-area: scpml;
  }
</style>
