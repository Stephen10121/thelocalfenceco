<script lang="ts">
  //@ts-ignore
  import Image from "svelte-image";
</script>

<section>
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="/admin">kit.svelte.dev</a> to read the documentation</p>
  <p>Visit <a href="/dashboard">dashboard</a> to read the documentation</p>
  <div class="image">
    <Image blur={true} src="cat.jpg" alt="Cat" height="100%" width="100%" />
  </div>
  <!-- <img src="cat.jpg" alt="Cat" /> -->
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: auto;
  }
  .image {
    aspect-ratio: 9/16;
    height: 500px;
  }
</style>
