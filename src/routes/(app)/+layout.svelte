<script lang="ts">
	import { exampleAnnouncementValues, scrollSomewhere, showNotification } from "../../functions/store";
	import Announcement from "../../components/Announcement.svelte";
	import LargeNavLink from "../../components/LargeNavLink.svelte";
	import SmallNavLink from "../../components/SmallNavLink.svelte";
	import Hamburger from "../../components/Hamburger.svelte";
	import Footer from "../../components/Footer.svelte";
	import { page } from "$app/stores";
	import { onDestroy, onMount } from "svelte";
    import Notification from "../../components/Notification.svelte";
	import logo from "../../assets/logo/web/logo-web-transparent.png";

	export let data;

	let scrollSomewhereValue: null | number = null;
	const scrollSomewhereUnsubscribe = scrollSomewhere.subscribe((value) => scrollSomewhereValue=value);

	$: if (scrollSomewhereValue && scrollSomewhereValue!==null) main.scrollTo(0, scrollSomewhereValue);

	let showAnnouncement2 = false;
	exampleAnnouncementValues.set(data.announcement);
	const exampleAnnouncementValuesUnsubscribe = exampleAnnouncementValues.subscribe(value => showAnnouncement2 = value.show);


	let showNav = false;

	const linkClicked = () => showNav = false;
	const pathMap = JSON.parse('{"/" : "-3px", "/about": "49px", "/contact": "108px", "/contact/quote": "108px", "/gallery": "170px"}');

	function calculateTranslate(pathname: string) {
		if (!Object.keys(pathMap).includes(pathname)) return '-3000px';
		return pathMap[pathname];
	}

	function calculatePathTitle(pathname: string) {
	if (pathname === '/about') return "About";
	if (pathname === '/contact') return "Contact";
	if (pathname === '/gallery') return "Gallery";
	return 'Local Fence Co';
	}

	let main: HTMLElement;
	let showNotificationVar: null | string = null;
	const showNotificationUnsubscribe = showNotification.subscribe((value) => showNotificationVar = value);

	let paths: {route: string, name: string}[] = [
	{route: "/", name: "Home"},
	{route: "/about", name: "About"},
	{route: "/contact", name: "Contact"},
	{route: "/gallery", name: "Gallery"}
	];

	const scrollToTop = () => main.scrollTo(0, 0);

	onMount(scrollToTop);

	$: {
		const urlParams = new URLSearchParams($page.url.search);
        const article = urlParams.get("article");
		if ($page.url.pathname && main && !article) scrollToTop();
	}

	onDestroy(() => {
	scrollSomewhereUnsubscribe();
	exampleAnnouncementValuesUnsubscribe();
	showNotificationUnsubscribe();
	});
</script>

{#if showAnnouncement2}
<Announcement strong={data.announcement.strong} value={data.announcement.val} on:close={() => (exampleAnnouncementValues.update((value) => {return{...value, show: false}}))} backgroundColor={data.announcement.backgroundColor} textColor={data.announcement.textColor} />
{/if}
{#if showNotificationVar}
	<Notification text={showNotificationVar} />
{/if}
<header>
<section class="public">
<section class="fancy">
<a class="logo" href="/" title="Go Home">
<!-- <h1>{calculatePathTitle($page.url.pathname)}</h1> -->
<div class="logo-image-cover">
	<img src={logo} alt="Local Fence Co logo" class="logo-image"/>
</div>
</a>
<section class="section-small">
<Hamburger active={showNav} on:click={() => (showNav = !showNav)} />
</section>
<nav class="section-large">
<ul>
<div class="selectedPointer" style="transform: translate({calculateTranslate($page.url.pathname)}, 50%)" />
{#each paths as onePath}
<LargeNavLink path={onePath.route}>{onePath.name}</LargeNavLink>
{/each}
</ul>
</nav>
</section>
</section>
<nav class="section-small-nav" style="transform: translateY({showNav ? '0' : '-100%'})">
<ul>
{#each paths as onePath}
<SmallNavLink path={onePath.route} pathname={$page.url.pathname} on:click={linkClicked}>{onePath.name}</SmallNavLink>
{/each}
</ul>
</nav>
</header>
<section bind:this={main} class="main-section" style="--minus-height: {showAnnouncement2 ? "100px" : "70px"}">
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
scroll-behavior: smooth;
}

.public {
height: 70px;
background-color: #ffffff;
width: 100%;
position: relative;
z-index: 200;
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
	height: 100%;
	position: relative;
}

.logo-image-cover {
	position: absolute;
	top: 25%;
	left: -20px;
	height: 50%;
}

.logo-image {
	height: 100%;
}

.logo h1 {
font-family: "Poppins", sans-serif;
font-size: 1.5rem;
color:#d69c42;
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
background-color: #d69c42;
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
.logo-image-cover {
	top: 10%;
	height: 80%;
}
}
</style>
