<script lang="ts">
  import { page } from "$app/stores";
    import { onMount } from "svelte";
  import Announcement from "../../components/Announcement.svelte";
  import Footer from "../../components/Footer.svelte";
  import Hamburger from "../../components/Hamburger.svelte";
  import LargeNavLink from "../../components/LargeNavLink.svelte";
  import SmallNavLink from "../../components/SmallNavLink.svelte";
  import { exampleAnnouncementValues } from "../../functions/store";

  export let data;
  console.log(data);

  let showAnnouncement = data.announcement.show;

  if (showAnnouncement) {
    exampleAnnouncementValues.set({
      strong: data.announcement.strong,
      backgroundColor: data.announcement.backgroundColor,
      textColor: data.announcement.textColor,
      value: data.announcement.val,
      show: data.announcement.show
    });
  }
  let showNav = false;

  function linkClicked() {
    showNav = false;
  }

  function calculateTranslate(pathname: string) {
    if (pathname === '/') return "-3px";
    if (pathname === '/about') return "49px";
    if (pathname === '/contact') return "108px";
    if (pathname === '/gallery') return "170px";
    return '-3000px';
  }

  function calculatePathTitle(pathname: string) {
    if (pathname === '/about') return "About";
    if (pathname === '/contact') return "Contact";
    if (pathname === '/gallery') return "Gallery";
    return 'Local Fence Co.';
  }

  let main: HTMLElement;
  // onMount(() => {
  //   main.addEventListener("scroll", (event) => {
  //     console.log(event);
  //   });
  // });
</script>

{#if showAnnouncement}
  <Announcement strong={data.announcement.strong} value={data.announcement.val} on:close={() => (showAnnouncement = false)} backgroundColor={data.announcement.backgroundColor} textColor={data.announcement.textColor} />
{/if}
<header>
  <section class="public">
    <section class="fancy">
      <a class="logo" href="/">
        <h1>{calculatePathTitle($page.url.pathname)}</h1>
      </a>
      <section class="section-small">
        <Hamburger active={showNav} on:click={() => (showNav = !showNav)} />
      </section>
      <nav class="section-large">
        <ul>
          <div class="selectedPointer" style="transform: translate({calculateTranslate($page.url.pathname)}, 50%)" />
          <LargeNavLink path="/">Home</LargeNavLink>
          <LargeNavLink path="/about">About</LargeNavLink>
          <LargeNavLink path="/contact">Contact</LargeNavLink>
          <LargeNavLink path="/gallery">Gallery</LargeNavLink>
        </ul>
      </nav>
    </section>
  </section>
  <nav class="section-small-nav" style="transform: translateY({showNav ? '0' : '-100%'})">
    <ul>
      <SmallNavLink path="/" pathname={$page.url.pathname} on:click={linkClicked}>Home</SmallNavLink>
      <SmallNavLink path="/about" pathname={$page.url.pathname} on:click={linkClicked}>About</SmallNavLink>
      <SmallNavLink path="/contact" pathname={$page.url.pathname} on:click={linkClicked}>Contact</SmallNavLink>
      <SmallNavLink path="/gallery" pathname={$page.url.pathname} on:click={linkClicked}>Gallery</SmallNavLink>
    </ul>
  </nav>
</header>
<section bind:this={main} class="main-section" style="--minus-height: {showAnnouncement ? "100px" : "70px"}">
  <slot />
  <Footer />
</section>
  
<style>
  header {
    height: 70px;
    width: 100%;
    position: relative;
  }

  .main-section {
    --minus-height: 100px;
    overflow: auto;
    width: 100%;
    height: calc(100% - var(--minus-height));
    /* display: grid;
    grid-template-rows: auto 200px; */
  }

  /* .main-section main {
    height: 100%;
  } */

  .public {
    height: 70px;
    background-color: #ffffff;
    width: 100%;
    position: relative;
    z-index: 200;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  }

  .fancy {
    position: absolute;
    height: 70px;
    background-color: #dfdfdf;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: none;
  }

  .logo {
    text-decoration: none;
  }

  .logo h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: #28583b;
  }

  .section-small-nav {
    width: 100%;
    background-color: #dfdfdf;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 180;
    transition: transform 0.25s linear;
  }

  .section-small-nav ul {
    display: flex;
    padding: 5px;
    gap: 5px;
    flex-direction: column;
  }

  .section-large {
    display: none;
  }

  .section-large ul {
    display: flex;
    gap: 10px;
    position: relative;
  }

  .selectedPointer {
    width: 50px;
    height: 4px;
    position: absolute;
    background-color: #28583b;
    bottom: -50%;
    left: 0;
    transform: translate(0, 50%);
    transition: transform 0.1s linear;
  }

  @media (min-width: 600px) {
    .fancy {
      width: 90%;
      left: 5%;
      top:15px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .section-small-nav {
      transform: translateY(-100%) !important;
    }

    .section-large {
      display: block;
    }

    .section-small {
      display: none;
    }
  }
</style>
  