<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let strong = "Limited time only";
  export let value = "All quotes are 50% off for the next 3 days.";
  const dispatch = createEventDispatcher();
</script>

<div class="cover">
  <section>
    <p
      ><strong>{strong}:</strong> {value}</p
    >
    <button on:click={() => dispatch("close")}>&#10006;</button>
  </section>
</div>

<style>
  .cover {
    position: relative;
    width: 100%;
    height: 30px;
  }
  section {
    width: 100%;
    height: 30px;
    background-color: #2f6846;
    display: grid;
    grid-template-columns: auto 20px;
    align-items: center;
    padding: 0 10px;
    z-index: 300;
    position: absolute;
    top: 0;
    left: 0;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 0.75rem;
  }

  p strong {
    letter-spacing: 0.05rem;
    font-family: "Poppins", sans-serif;
  }

  button {
    width: 20px;
    height: 20px;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    padding-bottom: 2px;
    cursor: pointer;
    color: white;
    transition: color 0.15s linear;
  }

  button:hover {
    color: gray;
  }
</style>
