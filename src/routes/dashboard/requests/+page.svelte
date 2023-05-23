<script lang="ts">
    import RequestTile from "../../../components/RequestTile.svelte";

    export let data;
</script>

<section>
    {#if data.requests.length}
        {#each data.requests.reverse() as request}
            <RequestTile email={request.from} name={request.name} about={request.about} when={request.when}/>
        {/each}
    {/if}
</section>


<style>
    section {
        width: 100%;
        height: 100%;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
        column-gap: 10px;
        row-gap: 10px;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>