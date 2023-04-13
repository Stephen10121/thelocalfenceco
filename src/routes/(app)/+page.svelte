<script lang="ts">
  //@ts-ignore
  import Image from "svelte-image";
  import PopupBox from "../../components/PopupBox.svelte";
  import Section1 from "../../components/mainPage/Section1.svelte";
  import Section2 from "../../components/mainPage/Section2.svelte";
    import { onMount } from "svelte";
  let showPopup = false;

  let main: HTMLElement;

  onMount(() => {
    console.log(main.getBoundingClientRect());
  });
</script>

<div class="image">
  <picture>
    <source 
      type="image/webp"
      srcset="
        /g/fence1-400.webp 400w,
        /g/fence1-800.webp 800w,
        /g/fence1-1200.webp 1200w"/>
    <img 
      loading="lazy"
      role="presentation"
      srcset="
        /g/fence1-400.jpg 400w,
        /g/fence1-800.jpg 800w,
        /g/fence1-1200.jpg 1200w
      "
      src="fence1.jpg"
      decoding="async"
      fetchpriority="high"
      alt="Fence 1" />
  </picture>
</div>
<main bind:this={main}>
  <Section1 />
  <Section2 />
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
    min-height: 200%;
    /* display: grid;
    grid-template-rows: 100% auto; */
    /* background-color: red;*/
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

  .image2 {
    /* min-height: 100%; */
    /* min-width: 100%; */
    /* object-fit: cover; */
    width: 2000px;
  }

  .image picture,
  .image img {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
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
