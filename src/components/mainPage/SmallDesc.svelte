<script lang="ts">
    import { onDestroy } from "svelte";
    import { exampleAnnouncementValues } from "../../functions/store";

    let announcementShowing = false;
    const showAnnouncementUnsubscribe = exampleAnnouncementValues.subscribe((value) => announcementShowing=value.show);

    onDestroy(() => {
        showAnnouncementUnsubscribe();
    });
</script>

<section class="cover" style="min-height: calc(100vh - {announcementShowing ? "10" : "7"}0px);min-height: calc(100dvh - {announcementShowing ? "10" : "7"}0px)">
    <p class="insured"><span class="green">&#x2713;</span> Licensed <span class="green">&#x2713;</span> Bonded <span class="green">&#x2713;</span> Insured</p>
    <p class="desc">We are a small, local fence installation and repair business located in Vancouver, WA servicing the Clark County area. It's our dedication to provide quality service, affordable prices, and 100% customer satisfaction. We specialize in installing Cedar Fences, Chain-Link Fences, Vinyl Fences/PVC Rail Fences, Custom Design Fences and more! <span><a href="/contact">Contact Us</a></span> for a free estimate today!</p>
    <a class="contactButton" href="/contact">Get A Free Quote Now!</a>
</section>

<style>
    .cover {
        background-color: #000000e5;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px;
        gap: 20px;
    }

    .insured {
        font-family: "Poppins", sans-serif;
        font-size: 1.25rem;
        color: #cacaca;
        padding: 10px;
    }

    .green {
        color: #34bd6b;
        margin: 0 5px;
    }

    .desc {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        text-indent: 3ch;
        line-height: 35px;
        color: #cacaca;
        max-width: 800px;
        margin-bottom: 30px;
        padding: 10px;
    }

    .desc span a {
        color: #cacaca;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
    }

    .contactButton {
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        color: #ffffff;
        background-color: #28583b;
        /* border: 2px solid #28583b; */
        padding: 15px;
        border-radius: 10px;
    }
</style>