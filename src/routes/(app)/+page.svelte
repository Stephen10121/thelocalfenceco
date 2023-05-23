<script lang="ts">
	import SmallDesc from "../../components/mainPage/SmallDesc.svelte";
	import Section1 from "../../components/mainPage/Section1.svelte";
	import FadeImages from "../../components/FadeImages.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://www.thelocalfenceco.com"/>
</svelte:head>

<div class="image">
	<FadeImages />
</div>
<main>
	<Section1 />
	<!-- <Section2 /> -->
	<SmallDesc />
</main>

<style>
	main {
		width: 100%;
		min-height: 200%;
	}

	.image {
		position: fixed;
		top: 70px;
		left: 0;
		z-index: -1;
		width: 100vw;
		height: 100vh;
	}
</style>
