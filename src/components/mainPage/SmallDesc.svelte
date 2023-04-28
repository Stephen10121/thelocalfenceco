<script lang="ts">
    import { onDestroy } from "svelte";
    import { exampleAnnouncementValues, showAnnouncement } from "../../functions/store";

    let announcementShowing = false;
    const showAnnouncementUnsubscribe = exampleAnnouncementValues.subscribe((value) => announcementShowing=value.show);

    onDestroy(() => {
        showAnnouncementUnsubscribe();
    });
</script>

<section class="cover" style="min-height: calc(100vh - {announcementShowing ? "10" : "7"}0px);min-height: calc(100dvh - {announcementShowing ? "10" : "7"}0px)">
    <h1>Who are we?</h1>
    <p>We are a small, local fence installation and repair business, striving for your satisfaction! It's our dedication to provide you quality services with affordable prices. We specialize in privacy fences, Cedar Fences, Vinyl Fences, Chain Link Fences, White PVC Rail Fences, Custom Design Fences, etc. <span><a href="tel:3607843128">Call</a></span> for a free estimate today!</p>
    <a class="contactButton" href="/contact">Get A Quote Now!</a>
</section>

<style>
    .cover {
        background-color: white;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        gap: 50px;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
        font-weight: 400;
        font-size: clamp(2.5rem, -1.5rem + 8vw, 3.5rem);
    }

    p {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        text-indent: 3ch;
        color: #000000;
        max-width: 800px;
        width: 100%;
        padding: 10px;
    }

    p span a {
        color: #000000;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
    }

    .contactButton {
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        color: #ffffff;
        background-color: #28583b;
        padding: 20px;
        border-radius: 100vh;
    }
</style>