<main>
    <article>
        <h1>what we do</h1>
        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, impedit facilis? Alias dignissimos neque eveniet dicta nesciunt iste magnam. Recusandae iure praesentium amet nulla. Explicabo dolore repudiandae doloribus cumque, laboriosam, non veniam labore, fuga beatae ut modi nesciunt. Sapiente fuga nobis porro eaque animi, at tempore nesciunt voluptatibus perferendis possimus?</p> -->
        <p>Lorem ipsum <span><a href="https://www.google.com" target="_blank" rel="noreferrer">dolor</a></span> sit amet consectetur adipisicing elit. Incidunt perspiciatis voluptates atque. Numquam ut nisi dolore laudantium quam eum reiciendis excepturi nihil dignissimos soluta veniam dicta doloremque eaque provident minima, expedita sunt magni maxime natus. Laborum totam fugiat sed expedita corporis provident? Est nisi sed fuga et esse corrupti provident.</p>
        <h3>what makes us different?</h3>
        <!-- <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, impedit facilis? Alias dignissimos neque eveniet dicta nesciunt iste magnam. Recusandae iure praesentium amet nulla. Explicabo dolore repudiandae doloribus cumque, laboriosam, non veniam labore, fuga beatae ut modi nesciunt. Sapiente fuga nobis porro eaque animi, at tempore nesciunt voluptatibus perferendis possimus?</p> -->
        <p>Lorem ipsum <span><a href="https://www.google.com" target="_blank" rel="noreferrer">dolor</a></span> sit amet consectetur adipisicing elit. Incidunt perspiciatis voluptates atque. Numquam ut nisi dolore laudantium quam eum reiciendis excepturi nihil dignissimos soluta veniam dicta doloremque eaque provident minima, expedita sunt magni maxime natus. Laborum totam fugiat sed expedita corporis provident? Est nisi sed fuga et esse corrupti provident.</p>
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
        /* display: grid;
        grid-template-rows: 100% auto; */
        /* background-color: red;*/
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
        font-size: clamp(2.5rem, -1.5rem + 8vw, 3.5rem);
    }

    h3 {
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
        font-weight: 400;
        font-size: clamp(1.5rem, -1.5rem + 8vw, 2rem);
    }

    p {
        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
        text-indent: 3ch;
        color: #000000;
        max-width: 800px;
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
