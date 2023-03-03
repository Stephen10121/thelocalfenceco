<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<section>
  <p
    ><strong>Limited time only:</strong> All quotes are 50% off for the next 3 days.</p
  >
  <button on:click={() => dispatch("close")}>&#10006;</button>
</section>

<style>
  section {
    width: 100%;
    height: 30px;
    background-color: #2f6846;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    z-index: 300;
  }

  p {
    font-family: "Roboto", sans-serif;
    color: white;
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
