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

{#if errorMsg}
    <small>{errorMsg}</small>
{/if}
<input use:typeAction {name} {id} bind:value={value} placeholder={placeholder} />