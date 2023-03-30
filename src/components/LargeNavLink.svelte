<script lang="ts">
    export let path: string;
</script>

<li>
    <a href={path}>
        <slot />
    </a>
</li>

<style>
    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: black;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        position: relative;
    }
</style>