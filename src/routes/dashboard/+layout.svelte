<script lang="ts">
	import { onDestroy } from "svelte";
	import Announcement from "../../components/Announcement.svelte";
	import { exampleAnnouncementValues, showExampleAnnouncement } from "../../functions/store";
    import { page } from "$app/stores";
    import type { AnnouncementBanner } from "../../functions/serverData";

	let showAnnouncement = false;
	const announceStoreUnsubscribe = showExampleAnnouncement.subscribe((value) => showAnnouncement = value);

	let announcementData: AnnouncementBanner = {strong: "", val: "", backgroundColor: "#000000", textColor: "#ffffff", show: true}
	const exampleAnnouncementUnsubscribe = exampleAnnouncementValues.subscribe(value => announcementData = value);

	onDestroy(() => {
		announceStoreUnsubscribe();
		exampleAnnouncementUnsubscribe();
	});
</script>

<section style="grid-template-rows: {showAnnouncement ? "30px " : ''}70px auto;">
	{#if showAnnouncement}
		<Announcement backgroundColor={announcementData.backgroundColor} textColor={announcementData.textColor} strong={announcementData.strong} value={announcementData.val} on:close={() => showExampleAnnouncement.set(false)}/>
	{/if}
	<header>
		<div>
			{#if $page.url.pathname !== "/dashboard"}
				<a href="/dashboard" class="back" title="Go Back" aria-label="Go Back">
					<img src="/icons/back.svg" alt="Go Back">
				</a>
			{/if}
		</div>
		<nav>
			<a href="/dashboard/banner" class="link">Banner</a>
			<a href="/dashboard/requests" class="link">Requests</a>
			<a href="/logout" class="logout">Logout</a>
		</nav>
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
		background-color: #dfdfdf;
		display: flex;
		align-items: center;
		padding: 0 10px;
		justify-content: space-between;
	}

	main {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	nav {
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	.back {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		height: 45px;
	}

	.back img {
		height: 90%;
	}

	.link {
		color: #000000;
		font-family: "Roboto",sans-serif;
	}

	.logout {
		width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000000;
		text-decoration: none;
		font-family: "Roboto",sans-serif;
		background-color: rgb(138, 138, 138);
		height: 40px;
		border-radius: 5px;

	}
</style>
