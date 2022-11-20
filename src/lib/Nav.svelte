<script lang="ts">
  import { Link } from "svelte-routing";
  import { Icon } from "@steeze-ui/svelte-icon";
  import { Menu } from "@steeze-ui/css-gg";
  import Logo from "./Logo.svelte";
</script>

<div>
  <nav
    class="flex flex-row-reverse max-h-auto bg-gray-700 p-3 rounded-lg transition-all"
  >
    <div class=" flex justify-center flex-col">
      <input id="toggle" class="hidden" type="checkbox" />

      <ul class="nav-list ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    <div class="flex-1 flex items-center">
      <div class="flex-1">
        <Logo size="3em"/>
      </div>
      <label
        class="mr-3 cursor-pointer sm:hidden block"
        for="toggle"
      >
        <Icon src={Menu} size="2em" />
      </label>
    </div>
  </nav>
</div>

<style>
  @media (min-width: 640px) {
    .nav-list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .nav-list > li {
      margin-left: 1rem;
    }
  }

  @media (max-width: 640px) {
    #toggle:checked ~ .nav-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .nav-list {
      display: none;
      background-color: rgb(31, 41, 55);
      padding: 1em 1em 1em 1em;
      border-radius: 0.5em;
      margin-top: 0.8em;
      text-align: left;
    }
    .nav-list::before {
      border-top: 0.2em solid rgb(55, 65, 81);
      margin: 0 auto;
      width: 90%;
      content: "";
      margin-bottom: 0.6em;
      border-radius: 0.5em;
    }
    .nav-list:first-child {
      margin-top: 2em;
    }

    .nav-list > li {
      margin-left: 0;
      margin-bottom: 0.3em;
      border-bottom: 0.15em solid rgb(55, 65, 81);
      border-radius: 0.1em;
    }

    nav {
      flex-direction: column-reverse;
    }
  }
</style>
