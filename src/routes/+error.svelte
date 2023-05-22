<script lang="ts">
  import { page } from "$app/stores";
  import type { AnnouncementBanner } from "../functions/serverData";
  import Layout from "./(app)/+layout.svelte";

  const announcementDummyData = {show: false} as any as AnnouncementBanner
</script>

<Layout data={{announcement: announcementDummyData}}>
  <section>
    <h1>{$page.status} | {$page.error?.message}</h1>
    <a href="/">Go Home</a>
  </section>
</Layout>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    color: #5a3b0d;
  }

  a {
    font-family: "Roboto", sans-serif;
    color: black;
  }
</style>
