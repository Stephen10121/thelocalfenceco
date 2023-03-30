<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let pathname: string;
  export let path: string;

  const dispatch = createEventDispatcher();
</script>

<li>
  <a href={path} class={pathname === path ? "selected" : ""} on:click={() => dispatch("click")}>
    <slot />
  </a>
</li>

<style>
  a {
    color: black;
    text-decoration: none;
    width: 100%;
    display: block;
    background-color: #b4b4b4;
    font-family: "Roboto", sans-serif;
    font-size: 1.15rem;
    padding: 5px;
    border-radius: 5px;
  }

  a.selected {
    background-color: #2f6846;
  }
</style>