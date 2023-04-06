<script lang="ts">
	import { onDestroy } from "svelte";
	import Announcement from "../../components/Announcement.svelte";
	import { exampleAnnouncementValues, showExampleAnnouncement } from "../../functions/store";
    import type { ExampleAnnoucement } from "../../functions/types";

	let showAnnouncement = false;
	const announceStoreUnsubscribe = showExampleAnnouncement.subscribe((value) => showAnnouncement = value);

	let announcementData: ExampleAnnoucement = {strong: "", value: ""}
	const exampleAnnouncementUnsubscribe = exampleAnnouncementValues.subscribe(value => announcementData = value);

	onDestroy(() => {
		announceStoreUnsubscribe();
		exampleAnnouncementUnsubscribe();
	});
</script>

<section style="grid-template-rows: {showAnnouncement ? "30px " : ''}70px auto;">
	{#if showAnnouncement}
		<Announcement strong={announcementData.strong} value={announcementData.value} on:close={() => showExampleAnnouncement.set(false)}/>
	{/if}
	<header>
		<a href="/logout">Logout</a>
		<a href="/dashboard/banner">Banner</a>
	</header>
	<main>
		<slot />
	</main>
</section>

<style>
	section {
		display: grid;
		width: 100vw;
		height: 100vh;
		height: 100dvh;
	}
	header {
		width: 100%;
		height: 70px;
		background-color: red;
	}

	main {
		width: 100%;
		height: 100%;
	}
</style>
