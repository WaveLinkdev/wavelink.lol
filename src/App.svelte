<script lang="ts">
  import "@fontsource/jetbrains-mono";
  import Nav from "./lib/Nav.svelte";
  import { Router, Route, Link } from "svelte-routing";

  import Home from "./pages/Home.svelte";
  import Contact from "./pages/Contact.svelte";
  import Projects from "./pages/Projects.svelte";

  export let url = "";
</script>

<Router {url}>
  <div class="p-2">
    <Nav />
    {url}
  </div>
  <div class="h-full">
    <Route path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </div>
</Router>
