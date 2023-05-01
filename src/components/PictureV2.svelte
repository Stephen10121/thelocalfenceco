<script lang="ts">
    export let url: string;
    export let alt: string;
    export let styles = "";
    export let className = "";
    export let heightTaller = false;
    export let first = false;
</script>

<img
    class={className}
    style="object-fit:cover;{heightTaller?"min-width:100%;max-height:100%":"max-width:100%;min-height:100%;"}{styles}"
    loading={first ? "eager" : "lazy"}
    role="presentation"
    src={url}
    decoding="async"
    fetchpriority="high"
    {alt}
/>