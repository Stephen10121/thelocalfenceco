<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let active = true;
    export let id = "inputSwitch";
    export let checkedBackgroundColor = "#36ff2f";
    export let unCheckedBackgroundColor = "#dfdfdf";
    export let checkedSwitchColor = "#ffffff";
    export let unCheckedSwitchColor = "#ffffff";
    export let height = 24;
    export let padding = 2;

    const dispatch = createEventDispatcher();

    function checkboxChange(event: Event) {
        //@ts-ignore
        dispatch("checked", event.target.checked);
        //@ts-ignore
        active=event.target.checked;
    }
</script>

<div style="height: {height}px;width:{height*2}px;">
    <input class="sr-only" type="checkbox" {id} name={id} checked={active} on:change={checkboxChange}/>
    <label style="--padding2: {padding}px;--slider-color: {active ? checkedSwitchColor : unCheckedSwitchColor};--move: {active ? `calc(100% + ${padding*2}px)` : "0%"};background-color: {active ? checkedBackgroundColor : unCheckedBackgroundColor};" for={id}></label>
</div>

<style>
    div {
        position: relative;
    }

    /* input {
        position: absolute;
        top: 0;
        left: 30px;
    } */

    label {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 100vh;
        top: 0;
        left: 0;
        cursor: pointer;
        transition: background-color 0.15s linear;
    }

    input:focus-visible + label {
        outline: 1px solid rgb(219, 219, 219);
        outline-offset: 1px;
    }

    label::before {
        content: "";
        position: absolute;
        left: var(--padding2);
        top: var(--padding2);
        aspect-ratio: 1/1;
        height: calc(100% - calc(var(--padding2) + var(--padding2)));
        border-radius: 100%;
        background-color: var(--slider-color);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: translateX(var(--move));
        transition: transform 0.15s linear, background-color 0.15s linear;
    }
</style>