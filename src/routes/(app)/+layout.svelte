<script lang="ts">
  import { page } from "$app/stores";
  import Announcement from "../../components/Announcement.svelte";
  import Hamburger from "../../components/Hamburger.svelte";

  let showAnnouncement = true;
  let showNav = false;

  function linkClicked() {
    showNav = false;
  }
</script>

{#if showAnnouncement}
	<Announcement on:close={() => (showAnnouncement = false)} />
{/if}
<header>
	<section class="public">
		<section class="fancy">
			<a class="logo" href="/"><h1>{$page.url.pathname === "/gallery" ? "Gallery" : "Local Fencing Co"}</h1></a>
			<section class="section-small">
				<Hamburger active={showNav} on:click={() => (showNav = !showNav)} />
			</section>
			<nav class="section-large">
			<ul>
			<div
			class="selectedPointer"
			style="transform: translate({$page.url.pathname === '/'
			? '-3px'
			: $page.url.pathname === '/about'
			? '49px'
			: $page.url.pathname === '/contact'
			? '108px'
			: $page.url.pathname === '/gallery'
			? '170px'
			: '-3000px'}, 50%)"
			/>
			<li
			><a href="/" class={$page.url.pathname === "/" ? "selected" : ""}
			>Home</a
			></li
			>
			<li
			><a
			href="/about"
			class={$page.url.pathname === "/about" ? "selected" : ""}
			>About</a
			></li
			>
			<li
			><a
			href="/contact"
			class={$page.url.pathname === "/contact" ? "selected" : ""}
			>Contact</a
			></li
			>
			<li
			><a
			href="/gallery"
			class={$page.url.pathname === "/gallery" ? "selected" : ""}
			>Gallery</a
			></li
			>
			</ul>
			</nav>
		</section>
	</section>
	<nav class="section-small-nav" style="transform: translateY({showNav ? '0' : '-100%'})">
		<ul>
		<li
		><a href="/" class={$page.url.pathname === "/" ? "selected" : ""} on:click={linkClicked}
		>Home</a
		></li
		>
		<li
		><a
		href="/about" on:click={linkClicked}
		class={$page.url.pathname === "/about" ? "selected" : ""}>About</a
		></li
		>
		<li
		><a
		href="/contact" on:click={linkClicked}
		class={$page.url.pathname === "/contact" ? "selected" : ""}
		>Contact</a
		></li
		>
		<li
		><a
		href="/gallery" on:click={linkClicked}
		class={$page.url.pathname === "/gallery" ? "selected" : ""}
		>Gallery</a
		></li
		>
		</ul>
	</nav>
</header>
<section class="main-section" style="height: calc(100% - {showAnnouncement ? "10" : "7"}0px);">
	<main>
		<slot />
	</main>
	<footer>
		footer
	</footer>
</section>

<style>
  header {
    height: 70px;
    width: 100%;
    position: relative;
  }

  .main-section {
	overflow: auto;
	width: 100%;
	height: calc(100% - 100px);
	/* height: 100%; */
	display: grid;
	grid-template-rows: auto 200px;
  }

  main {
	height: 100%;
  }

  .public {
    height: 70px;
    background-color: #f3f3f3;
    width: 100%;
    position: relative;
    z-index: 200;
    /* background: rgb(223, 223, 223);
    background: linear-gradient(
      90deg,
      rgba(223, 223, 223, 1) 0%,
      rgba(69, 110, 85, 1) 25%,
      rgba(40, 88, 59, 1) 100%
    ); */
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
    padding: 0 10px;
    box-shadow: none;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    color: #28583b;
  }

  .logo {
    text-decoration: none;
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

  .section-small-nav ul li a {
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

  .section-small-nav ul li a.selected {
    background-color: #2f6846;
  }
  /* .section-small-nav ul li a.selected::before {
    content: "▶";
    padding-right: 3px;
    font-family: "Roboto", sans-serif;
    font-size: 1.15rem;
    color: black;
  } */

  .section-large {
    display: none;
  }

  .section-large ul {
    display: flex;
    gap: 10px;
    position: relative;
  }

  .section-large ul li {
    list-style: none;
  }

  .section-large ul li a {
    text-decoration: none;
    color: black;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
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
    /* border-radius: 100%; */
  }

  footer {
    height: 200px;
    background-color: black;
    color: white;
  }

  @media (min-width: 600px) {
    .fancy {
      width: 80%;
      left: 10%;
      top: 35px;
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
