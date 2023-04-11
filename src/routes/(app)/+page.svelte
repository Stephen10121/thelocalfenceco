<script lang="ts">
  //@ts-ignore
  import Image from "svelte-image";
  import PopupBox from "../../components/PopupBox.svelte";
  import Section1 from "../../components/mainPage/Section1.svelte";

  let showPopup = true;
</script>

<div class="image">
  <img src="fence1.jpg" alt="Fence 1" />
</div>
<main>
  <Section1 />
  <div class="cover2" id="#section02">
    <h1>Dev Mode.</h1>
    <p>*** All the images/text you see here are just placeholders and are only used for development.***</p>
    <p>Visit <a href="/dashboard">dashboard</a> to read the documentation</p>
    <div class="image2">
      <Image blur={true} src="fence1.jpg" alt="Fence 1" height="100%" width="100%" />
    </div>
  </div>
  {#if showPopup}
    <PopupBox on:close={() => showPopup=false}>
      <section class="disclaimer">
        <h1>Dev Mode.</h1>
        <p>*** All the images/text you see here are just placeholders and are only used for development.***</p>
      </section>
    </PopupBox>
  {/if}
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
    top: 70px;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* min-height: 100%; */
    /* object-fit: cover; */
    /* background: linear-gradient(#ffffff, #000000); */
    /* background-image: url("/fenc1.jpg"); */
  }

  .image img {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
  }

  .image2 {
    width: 300px;
    aspect-ratio: 16/9;
  }
  .cover2 {
    /* background: linear-gradient(#ffffff00, #000000); */
    background-color: white;
    width: 100%;
    height: 50%;
  }

  .disclaimer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
  }

  .disclaimer h1 {
    color: red;
    font-size: 2rem;
    font-family: "Poppins",sans-serif;
  }
  .disclaimer p {
    font-family: "Roboto", sans-serif;
  }

  /* @media (min-width: 1000px) {
    .box {
        width: 40%;
    }
  } */
</style>
