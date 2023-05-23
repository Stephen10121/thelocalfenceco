<script lang="ts">
    import { onDestroy } from "svelte";
    import { exampleAnnouncementValues, scrollSomewhere } from "../../functions/store";
    import ScrollDownButton from "../ScrollDownButton.svelte";

    let box: HTMLElement;
    let announcementShowing = false;
    const showAnnouncementUnsubscribe = exampleAnnouncementValues.subscribe((value) => announcementShowing=value.show);

    onDestroy(() => {
        showAnnouncementUnsubscribe();
    });
</script>

<section class="cover" bind:this={box} style="height: calc(100vh - {announcementShowing ? "10" : "7"}0px);height: calc(100dvh - {announcementShowing ? "10" : "7"}0px);">
    <h1>Local Fence Co</h1>
    <h2>Fence installation and repair in Vancouver WA and surrounding areas.</h2>
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
        background: linear-gradient(#ffffff00, #000000e5);
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1 {
        font-family: "Copperplate";
        font-size: clamp(2.5rem, -1.5rem + 8vw, 3.5rem);
        font-weight: 500;
        color: #ffffff;
        margin-bottom: 20px;
        width: 90%;
        text-align: center;
    }

    h2 {
        font-family: "Poppins", sans-serif;
        font-size: clamp(1rem, -1.5rem + 8vw, 2rem);
        color: #dbdbdb;
        margin-bottom: 50px;
        width: 90%;
        text-align: center;
    }
</style>