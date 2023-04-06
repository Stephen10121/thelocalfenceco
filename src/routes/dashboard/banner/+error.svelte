<script lang="ts">
    import { page } from "$app/stores";
    import type { AnnouncementBanner } from "../../../functions/serverData";
    import Page from "./+page.svelte";

    const announcementDummyData = {show: false} as any as AnnouncementBanner
</script>

<h1>{$page.status} | {$page.error?.message}</h1>
<Page data={{test: "wow", announcement: {announcementBanner: announcementDummyData}}}/>

<style>
    h1 {
        text-align: center;
        font-family: "Roboto", sans-serif;
        color: red;
    }
</style>