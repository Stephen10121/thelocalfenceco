<script>
	import PictureV2 from "./PictureV2.svelte";
	import whitePrettyPicture from "../assets/fences/whitepretty.jpg";
	import wooden5Fence from "../assets/fences/wooden5.jpg";
	import wooden4Fence from "../assets/fences/wooden4.jpg";
	import wooden3Fence from "../assets/fences/wooden3.jpg";
</script>

<div class='container'>
	<div class='pic' id='pic4'><PictureV2 alt="Wooden Fence" url={wooden3Fence} /></div>
	<div class='pic' id='pic3'><PictureV2 alt="Wooden Fence" url={wooden4Fence} /></div>
	<div class='pic' id='pic2'><PictureV2 alt="Wooden Fence" url={wooden5Fence} /></div>
	<div class='pic' id='pic1'><PictureV2 first={true} heightTaller={true} alt="White Vinyl Fence" url={whitePrettyPicture} /></div>
</div>

<style>
	.container {
		position: relative;
		display: block;
		width: 100%;
		min-height: 100%;
		margin: 0 auto;
	}

	.pic {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		-webkit-animation: fade 20s infinite;
		animation: fade 20s infinite;
	}

	#pic1 {animation-delay: 0s;}
	#pic2 {animation-delay: 5s;}
	#pic3 {animation-delay: 10s;}
	#pic4 {animation-delay: 15s;}

	@-webkit-keyframes fade {
		0% {opacity: 1;}
		15% {opacity: 1;}
		25% {opacity: 0;}
		90% {opacity: 0;}
		100% {opacity: 1;}
	}

	@keyframes fade {
		0% {opacity: 1;}
		15% {opacity: 1;}
		25% {opacity: 0;}
		90% {opacity: 0;}
		100% {opacity: 1;}
	}
</style>