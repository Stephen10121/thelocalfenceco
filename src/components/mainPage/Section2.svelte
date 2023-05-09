<script lang="ts">
    import Tile from "../Tile.svelte";
    import { onDestroy } from "svelte";
    import { exampleAnnouncementValues, showAnnouncement } from "../../functions/store";

    let announcementShowing = false;
    const showAnnouncementUnsubscribe = exampleAnnouncementValues.subscribe((value) => announcementShowing=value.show);

    onDestroy(() => {
        showAnnouncementUnsubscribe();
    });
</script>

<section class="cover" style="min-height: calc(100vh - {announcementShowing ? "10" : "7"}0px);min-height: calc(100dvh - {announcementShowing ? "10" : "7"}0px)">
        <Tile first={true} linkTo="/about?article=cedar" buttonCallToAction="Learn More" title="Cedar Privacy Fences" backgroundImageLink="/fence1.jpg"/>
        <Tile buttonCallToAction="Get A Quote" title="Lattice fences" backgroundImageLink="/fence3.jpg"/>
        <Tile buttonCallToAction="Get A Quote" title="vinyl fences" backgroundImageLink="/fence4.jpg"/>
        <Tile buttonCallToAction="Get A Quote" title="wooden fences" backgroundImageLink="/fence1.jpg"/>
</section>

<style>
    .cover {
        background-color: white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }
</style>