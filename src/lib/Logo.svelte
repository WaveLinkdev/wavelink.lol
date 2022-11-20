<script lang="ts">
  import { navigate } from "svelte-routing";


  export let size: string = "100px";
  export let reactive: boolean = true;
</script>


<div class="logo-container" style="width: {size}; height: {size}">
  <img src="wavelink.png" alt="Wavelink Logo" class="logo {reactive ? "reactive" : ""}" on:mouseup={() => navigate("/")}/>
  <div class="logo-edge" />
</div>

<style>
  .logo {
    border-radius: 50%;
    min-width: inherit;
    min-height: inherit;
    z-index: 100;
    transition: all 0.2s ease-in-out;
  }
  
  .reactive:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  .logo-edge {
    width: inherit;
    height: inherit;
    background: linear-gradient(90deg, rgb(183, 2, 2) 0%, rgb(8, 18, 157) 100%);
    border-radius: 50%;

    position: absolute;
    top: 0%;
    z-index: 1;

    animation: logo-edge 10s infinite linear;
  }

  .logo-container {
    display: flex;

    justify-content: center;
    align-items: center;

    position: relative;
    padding: 0.1rem;

    border-radius: 50%;
  }

  @keyframes logo-edge {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
