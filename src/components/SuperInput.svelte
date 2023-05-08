<script lang="ts">
    export let errorMsg: undefined | string[];
    export let value = "";
    export let name: string;
    export let id = "";
    export let type: "text" | "password" | "email" | "search" = "text";
    export let placeholder: null | string = null;

    function typeAction(node: HTMLInputElement) {
        node.type = type;
    }
</script>

<div>
    {#if errorMsg}
        <small>{errorMsg}</small>
    {/if}
    <input class="{errorMsg ? "error" : ""}" use:typeAction {name} {id} bind:value={value} placeholder={placeholder} />
</div>

<style>
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    input {
        width: 100%;
        height: 40px;
        border: 1px solid #000000;
        border-radius: 7px;
        padding: 0 10px;
        transition: border 0.15s linear;
    }

    input.error {
        border: 1px solid red;
    }
</style>