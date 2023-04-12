<script lang="ts">
    import IntersectionObserver from "svelte-intersection-observer";
    import { fade } from "svelte/transition";

    export let title: string;
    export let buttonCallToAction: string;
    export let backgroundImageLink: string;
    export let first = false;

    let element: HTMLElement;
    let intersecting: boolean;
</script>

<IntersectionObserver {element} bind:intersecting>
    <div class="intersector">
        <div class="actualIntersector" bind:this={element} style="top: {first ? "12" : ""}0px;height: {first ? "1" : "25"}0px;"/>
        {#if intersecting}
            <div transition:fade class="tileImage" style={`background-image: url("${backgroundImageLink}");`}>
                <div class="tile">
                    <h1>{title}</h1>
                    <button>{buttonCallToAction}</button>
                </div>
            </div>
        {/if}
    </div>
</IntersectionObserver>

<style>
    .intersector {
        width: 100%;
        height: 250px;
        position: relative;
    }

    .actualIntersector {
        position: absolute;
        width: 10px;
        height: 10px;
    }

    .tileImage {
        width: 100%;
        height: 100%;
        background-size: cover;
        border-radius: 10px;
        overflow: hidden;
        /* animation-duration: 0.15s;
        animation-name: fadeIn;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 0s; */
        transition: opacity 0.15s linear;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

    .tile {
        width: 100%;
        height: 100%;
        background-color: #1e573494;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 100;
        color: #dfdfdf;
    }

    button {
        border: 1px solid #dfdfdf;
        color: #dfdfdf;
        background: none;
        padding: 5px;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        font-weight: 100;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.15s linear, color 0.15s linear;
    }

    button:hover {
        background-color: #dfdfdf;
        color: #000000;
    }
</style>