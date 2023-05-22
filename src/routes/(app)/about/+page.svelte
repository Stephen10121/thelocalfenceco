<script lang="ts">
    import { onMount } from "svelte";
    import FadeImages from "../../../components/FadeImages.svelte";

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const article = urlParams.get("article");
        if (article) {
            setTimeout(() => {
                window.location.hash = `#${article}`;
            }, 500);
        }
    });
</script>
<div class="image">
	<FadeImages />
</div>
<main>
    <article>
        <h1>Who are we</h1> 
        <p>We are a small, local fence installation and repair business located in Vancouver, WA servicing the Clark County area. It's our dedication to provide quality service, affordable prices, and 100% customer satisfaction. We specialize in installing Cedar Fences, Chain-Link Fences, Vinyl Fences/PVC Rail Fences, Custom Design Fences and more! <span><a href="/contact">Contact Us</a></span> for a free estimate today!</p>
        <h3>Our Services and What We Offer</h3>
        <div>
        <p id="cedar">Cedar Privacy Fences --- A cedar fence is a popular choice in the Pacific Northwest for a privacy fence. Cedar Privacy Fences offer great protection and security of your yard and your property, giving you that peace of mind. The long lasting cedar is very durable, withstanding the rainy months and the dry summers. With its natural oils, cedar wood repels insects and bugs to stay away from your fence. Not only is it durable, but the design fits a variety of styles like rustic, modern, suburbs, etc. There are many different designs to choose from, giving you the opportunity to find what's your taste and what fits your yard best!</p><p>With the beautiful design and the great durability, you can't go wrong when choosing the Cedar Privacy Fence! We will install your Cedar Fence in a timely manner with high efforts to provide you the best quality and customer satisfaction!</p>
    </div>
        <p id="chain">Chain-link Fence --- Are you looking for low maintenance affordable fence? Chain Link Fences are made of durable galvanized steel that will stay up for decades and not rot. Though it offers minimal privacy, it's a great way to keep the unwanted guests off the yard, and pets and children inside. The price is very affordable and reasonable for the amount of years you'll get out of the fence! Give us a call, and we'll get you scheduled!</p>
        <p id="vinyl">Vinyl Fence/PVC Rail Fence --- Vinyl/PVC Fences are known for there easy maintenance and high durability. Maybe you're looking to border your property with a fence that has that sleek design, making your property stand out, meanwhile keeping the cattle and animals in? -A white PVC Rail Fence is your answer! Or maybe you just want the privacy in your backyard with modern sleek design? Vinyl panel fence is what you need! Although these fences may seem pricey, it reflects the longevity and easy maintenance they offer! Contact us today for a free quote!</p>
        <p id="custom">Custom Design Fences --- Have you been looking for someone to build that one fence you've had in mind forever? Look no further! Staying humbled, we will do our best to have you satisfied with the results of your custom fence. Contact us with a description and the design your looking for, and we'll get you started!</p>
        <!-- <h1>what we do</h1> -->
        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, impedit facilis? Alias dignissimos neque eveniet dicta nesciunt iste magnam. Recusandae iure praesentium amet nulla. Explicabo dolore repudiandae doloribus cumque, laboriosam, non veniam labore, fuga beatae ut modi nesciunt. Sapiente fuga nobis porro eaque animi, at tempore nesciunt voluptatibus perferendis possimus?</p> -->
        <!-- <p>Lorem ipsum <span><a href="https://www.google.com" target="_blank" rel="noreferrer">dolor</a></span> sit amet consectetur adipisicing elit. Incidunt perspiciatis voluptates atque. Numquam ut nisi dolore laudantium quam eum reiciendis excepturi nihil dignissimos soluta veniam dicta doloremque eaque provident minima, expedita sunt magni maxime natus. Laborum totam fugiat sed expedita corporis provident? Est nisi sed fuga et esse corrupti provident.</p> -->
        <!-- <h3>what makes us different?</h3> -->
        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, impedit facilis? Alias dignissimos neque eveniet dicta nesciunt iste magnam. Recusandae iure praesentium amet nulla. Explicabo dolore repudiandae doloribus cumque, laboriosam, non veniam labore, fuga beatae ut modi nesciunt. Sapiente fuga nobis porro eaque animi, at tempore nesciunt voluptatibus perferendis possimus?</p> -->
        <!-- <p>Lorem ipsum <span><a href="https://www.google.com" target="_blank" rel="noreferrer">dolor</a></span> sit amet consectetur adipisicing elit. Incidunt perspiciatis voluptates atque. Numquam ut nisi dolore laudantium quam eum reiciendis excepturi nihil dignissimos soluta veniam dicta doloremque eaque provident minima, expedita sunt magni maxime natus. Laborum totam fugiat sed expedita corporis provident? Est nisi sed fuga et esse corrupti provident.</p> -->
    </article>
</main>

<style>
    main {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        background-color: #ffffffb6;
        /* display: grid;
        grid-template-rows: 100% auto; */
        /* background-color: red;*/
    }
    .image {
		position: fixed;
		top: 70px;
		left: 0;
		z-index: -1;
		width: 100vw;
		height: 100vh;
	}

    article {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
        font-weight: 400;
        font-size: clamp(2rem, -1.5rem + 8vw, 3.5rem);
    }

    h3 {
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
        font-weight: 500;
        font-size: clamp(1rem, -1.5rem + 8vw, 2rem);
    }

    p {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        text-indent: 3ch;
        font-weight: 500;
        line-height: 35px;
        color: #000000;
        max-width: 800px;
        padding: 0 10px;
    }

    p span a {
        color: #000000;
        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
    }

    @media (min-width: 800px) {
        article {
            align-items: flex-start;
        }
    }
</style>
