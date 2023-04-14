<script lang="ts">
    import FadeImages from "../../../../components/FadeImages.svelte";

</script>
<main>
    <h1>get a quote</h1>
    <FadeImages />
</main>
<style>
    main {
        min-height: 100%;
        padding: 20px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 60px;
        --gap: 10px;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: clamp(1.75rem, -1.5rem + 8vw, 2.25rem);
    }
</style>