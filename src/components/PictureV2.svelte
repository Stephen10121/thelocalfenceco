<script lang="ts">
    export let url: string;
    export let alt: string;
    export let styles = "";
    export let className = "";
    export let heightTaller = false;
</script>

    <img
    class={className} style="{heightTaller ? "min-width: 100%;max-height: 100%" : "max-width:100%;min-height: 100%;"}{styles}"
      loading="lazy"
      role="presentation"
      src={url}
      decoding="async"
      fetchpriority="high"
      {alt} />

<style>
    img {
        /* max-height: 100%;
        min-width: 100%; */
        object-fit: cover;
    }
</style>