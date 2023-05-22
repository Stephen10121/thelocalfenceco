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
    /* background-color: #b4b4b4; */
    background-color: #c2c2c2;
    /* border: 1px solid #3f3f3f; */
    box-shadow: inset rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    font-family: "Roboto", sans-serif;
    font-size: 1.15rem;
    padding: 5px 15px;
    border-radius: 5px;
  }

  a.selected {
    background-color: #5a3b0d;
  }
</style>