<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { exampleAnnouncementValues, showExampleAnnouncement } from "../../../functions/store";
    import type { ExampleAnnoucement } from "../../../functions/types";

    let showAnnouncement = false;
    const announceStoreUnsubscribe = showExampleAnnouncement.subscribe((value) => showAnnouncement = value);

    let exampleAnnouncementValue: ExampleAnnoucement = {strong: "", value: ""}
    exampleAnnouncementValues.subscribe(value => exampleAnnouncementValue = value);

    $: {
        exampleAnnouncementValues.set(exampleAnnouncementValue);
    }

    $: {
        showExampleAnnouncement.set(showAnnouncement);
    }

    showExampleAnnouncement.set(true);
    // onMount(() => {
    // });

    onDestroy(() => {
        announceStoreUnsubscribe();
    });
</script>


<section>
    <div>
        <label for="showannouncement">Show Example Announcement</label>
        <input type="checkbox" name="showannouncement" id="showannouncement" bind:checked={showAnnouncement} />
        
        <label for="strong">Bold Part</label>
        <input type="text" name="strong" id="strong" placeholder="Bold Part" bind:value={exampleAnnouncementValue.strong} />
    
        <label for="val">Not Bold Part</label>
        <input type="text" name="val" id="val" placeholder="Not Bold Part" bind:value={exampleAnnouncementValue.value}/>
    </div>
</section>


<style>
    section {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    div {
        display: flex;
        flex-direction: column;
    }
</style>