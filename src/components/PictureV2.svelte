<script lang="ts">
    export let url: string;
    export let alt: string;
    export let styles = "";
    export let className = "";
</script>

    <img
    class={className} style={styles}
      loading="lazy"
      role="presentation"
      src="{url}.jpg"
      decoding="async"
      fetchpriority="high"
      {alt} />

<style>
    img {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
</style>