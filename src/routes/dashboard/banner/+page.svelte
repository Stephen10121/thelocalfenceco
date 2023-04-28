<script lang="ts">
    import { onDestroy } from "svelte";
    import { exampleAnnouncementValues, showExampleAnnouncement } from "../../../functions/store";
    import Switch from "../../../components/Switch.svelte";
    import type { AnnouncementBanner } from "../../../functions/serverData";

    export let data;
    console.log(data.announcement);
    exampleAnnouncementValues.set(data.announcement.announcementBanner);
    let showAnnouncement = false;
    const announceStoreUnsubscribe = showExampleAnnouncement.subscribe((value) => showAnnouncement = value);

    let exampleAnnouncementValue: AnnouncementBanner = {strong: "", val: "", backgroundColor: "#2f6846", textColor: "#ffffff", show: true}
    exampleAnnouncementValues.subscribe(value => exampleAnnouncementValue = value);

    showExampleAnnouncement.set(true);

    $: {
        exampleAnnouncementValues.set(exampleAnnouncementValue);
    }

    function check({ detail }: CustomEvent) {
        showExampleAnnouncement.set(detail);
    }

    onDestroy(() => {
        announceStoreUnsubscribe();
    });
</script>


<section style="padding-top: {showAnnouncement ? "10" : "40"}px;">
    <form class="box" action="/dashboard/banner?/updateBanner" method="POST">
        <div class="sep">
            <p>Show Example Announcement</p>
            <Switch id="showannouncement" on:checked={check} active={showAnnouncement} />
        </div>
        
        <div class="sep">
            <label for="strong">Bold Part</label>
            <input type="text" name="strong" id="strong" placeholder="Bold Part" bind:value={exampleAnnouncementValue.strong} />
        </div>
    
        <div class="sep">
            <label for="val">Not Bold Part</label>
            <input type="text" name="val" id="val" placeholder="Not Bold Part" bind:value={exampleAnnouncementValue.val}/>
        </div>

        <div class="sep">
            <p>Make announcement Public</p>
            <Switch id="announcementpublic" active={exampleAnnouncementValue.show} />
        </div>

        <div class="sep">
            <label for="backgroundColor">Background Color</label>
            <input type="color" name="backgroundColor" id="backgroundColor" bind:value={exampleAnnouncementValue.backgroundColor}/>
        </div>

        <div class="sep">
            <label for="textColor">Text Color</label>
            <input type="color" name="textColor" id="textColor" bind:value={exampleAnnouncementValue.textColor}/>
        </div>

        <div class="sep">
            <div></div>
            <button>Update</button>
        </div>
    </form>
</section>


<style>
    section {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        padding: 0 20px;
    }

    .box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .sep {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    label,
    p {
        color: #000000;
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
    }

    input[type="text"] {
        padding: 5px;
        border: 1px solid #000000;
        border-radius: 5px;
    }

    button {
        padding: 7px 5px;
        border: none;
        background-color: #000000;
        color: #ffffff;
        font-family: "Roboto", sans-serif;
        border-radius: 5px;
        cursor: pointer;
    }
</style>