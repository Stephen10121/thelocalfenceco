<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("click")}>
    <span />
    <span />
    <span />
</button>

<style>
    
    button {
        position: absolute;
        bottom: 70px;
        left: 50%;
        padding-top: 80px;
        width: 50px;
        background: none;
        border: none;
        z-index: 2;
        display: inline-block;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50% 0);
        color: #fff;
        font : normal 400 20px/1 'Roboto', sans-serif;
        letter-spacing: .1em;
        text-decoration: none;
        cursor: pointer;
        transition: opacity .3s;
    }

    button:hover {
        opacity: .5;
    }


    button span {
        position: absolute;
        top: 0;
        left: 50%;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: sdb07 2s infinite;
        animation: sdb07 2s infinite;
        opacity: 0;
        box-sizing: border-box;
    }

    button span:nth-of-type(1) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }

    button span:nth-of-type(2) {
        top: 16px;
        -webkit-animation-delay: .15s;
        animation-delay: .15s;
    }

    button span:nth-of-type(3) {
        top: 32px;
        -webkit-animation-delay: .3s;
        animation-delay: .3s;
    }

    @-webkit-keyframes sdb07 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes sdb07 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>