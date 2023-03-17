<script lang="ts">
  //@ts-ignore
  import Image from "svelte-image";
</script>

<section>
  <h1>Dev Mode.</h1>
  <p>*** All the images/text you see here are just placeholders and are only used for development.***</p>
  <p>Visit <a href="/dashboard">dashboard</a> to read the documentation</p>
  <div class="image">
    <Image blur={true} src="fence1.jpg" alt="Fence 1" height="100%" width="100%" />
  </div>
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
