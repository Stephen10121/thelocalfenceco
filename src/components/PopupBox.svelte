<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let id = "coverPopup";

    const dispatch = createEventDispatcher();
    function clicked(event: MouseEvent) {
        //@ts-ignore
        if (event.target.id === id) {
            dispatch("close");
        }
    }
</script>

<section {id} class="cover" on:mousedown={clicked}>
    <section class="box">
        <button aria-label="Close Popup" on:click={() => dispatch("close")}>&#10006;</button>
        <slot />
    </section>
</section>

<style>
    .cover {
        width: 100vw;
        height: 100vh;
        height: 100dvh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #00000052;
        z-index: 500;
    }

    .box {
        width: 90%;
        height: 50%;
        background-color: #dfdfdf;
        border-radius: 10px;
        position: relative;
    }

    button {
        width: 20px;
        height: 20px;
        border: none;
        background-color: #c5c5c5;
        border-radius: 100%;
        position: absolute;
        top: 5px;
        cursor: pointer;
        padding-bottom: 1px;
        right: 5px;
        transition: background-color 0.15s linear;
    }

    button:hover {
        background-color: #a0a0a0;
    }

    @media (min-width: 740px) {
        .box {
            width: 60%;
        }
    }

    @media (min-width: 1000px) {
        .box {
            width: 40%;
        }
    }
</style>