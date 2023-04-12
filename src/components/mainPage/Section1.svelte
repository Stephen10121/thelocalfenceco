<script lang="ts">
    import { onDestroy } from "svelte";
    import { scrollSomewhere, showAnnouncement } from "../../functions/store";
    import ScrollDownButton from "../ScrollDownButton.svelte";

    let box: HTMLElement;
    let announcementShowing = false;
    const showAnnouncementUnsubscribe =showAnnouncement.subscribe((value) => announcementShowing=value);

    onDestroy(() => {
        showAnnouncementUnsubscribe();
    });
</script>

<section class="cover" bind:this={box} style="height: calc(100vh - {announcementShowing ? "10" : "7"}0px);height: calc(100dvh - {announcementShowing ? "10" : "7"}0px);">
    <h1>Lets Get Started</h1>
    <ScrollDownButton on:click={() => {
        scrollSomewhere.set(box.getBoundingClientRect().height);
        setTimeout(() => {
            scrollSomewhere.set(null);
        }, 1);
    }}/>
</section>

<style>
    .cover {
        position: relative;
        background: linear-gradient(#ffffff00, #000000);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: clamp(2.5rem, -1.5rem + 8vw, 4rem);
        color: #dbdbdb;
        margin-bottom: 50px;
    }
</style>