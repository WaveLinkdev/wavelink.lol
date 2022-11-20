<script lang="ts">
  import Typewriter from "svelte-typewriter";
  export let textSize = "2.25rem";
</script>

<div class="flex h-full justify-center items-center" style="margin-left: 4ch;">
  <Typewriter
    keepCursorOnFinish={true}
    interval={50}
    cursor={true}
    
  >
    <h1 style="font-size: {textSize};"><slot /></h1>
  </Typewriter>
</div>
