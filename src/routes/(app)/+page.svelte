<script lang="ts">
  //@ts-ignore
  import Image from "svelte-image";
</script>

<div class="image">
  <Image blur={true} src="fence1.jpg" alt="Fence 1" height="100%" width="100%" />
</div>
<main>
  <div class="cover">
    <h1>Dev Mode.</h1>
    <p>*** All the images/text you see here are just placeholders and are only used for development.***</p>
    <p>Visit <a href="/dashboard">dashboard</a> to read the documentation</p>
    <div class="image2">
      <Image blur={true} src="fence1.jpg" alt="Fence 1" height="100%" width="100%" />
    </div>
  </div>
  <div class="cover2">
    <h1>Dev Mode.</h1>
    <p>*** All the images/text you see here are just placeholders and are only used for development.***</p>
    <p>Visit <a href="/dashboard">dashboard</a> to read the documentation</p>
    <div class="image2">
      <Image blur={true} src="fence1.jpg" alt="Fence 1" height="100%" width="100%" />
    </div>
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 200%;
    /* display: grid;
    grid-template-rows: 100% 100%; */
    /* background-color: red; */
  }
  .image {
    position: fixed;
    width: 100%;
    /* height: 100%; */
    aspect-ratio: 16/9;
    top: 70px;
    left: 0;
    z-index: -1;
    /* background: linear-gradient(#ffffff, #000000); */
    /* background-image: url("/fenc1.jpg"); */
  }

  .image2 {
    width: 300px;
    aspect-ratio: 16/9;
  }

  .cover {
    background: linear-gradient(#ffffff00, #000000);
    width: 100%;
    height: 50%;
  }
  .cover2 {
    /* background: linear-gradient(#ffffff00, #000000); */
    background-color: white;
    width: 100%;
    height: 50%;
  }
</style>
