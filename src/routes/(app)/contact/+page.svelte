<main>
    <h1>We Are in <span>Vancouver Washington</span></h1>
    <section>
        <div>
            <img src="/icons/phone.svg" alt="Phone Icon">
            <h2>Telephone</h2>
            <a href="tel:3601234567">(360)-123-4567</a>
        </div>
        <div>
            <img src="/icons/map.svg" alt="Map Icon">
            <h2>Location</h2>
            <p>City, State</p>
        </div>
        <div>
            <img src="/icons/clock.svg" alt="Clock Icon">
            <h2>Hours</h2>
            <p>Mon-Fri: 9AM-5PM<br>Sat-Sun: Closed</p>
        </div>
    </section>
</main>
<style>
    main {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 60px;
        --gap: 100px;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: clamp(1.25rem, -1.5rem + 8vw, 2rem);
    }

    h1 span {
        color: #28583b;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: calc(var(--gap) / 2);
    }

    div:not(:first-child){
        border-top: 2px solid black;
        padding-top: calc(var(--gap) / 2);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* background-color: red; */
        gap: 15px;
        height: 70px;
    }

    div img {
        width: 40px;
        height: 40px;
        color: #28583b;
    }

    div h2 {
        font-family: "Poppins", sans-serif;
        font-size: 1.2rem;
    }

    div p,
    div a {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        color: black;
    }

    @media (min-width: 600px) {
        main {
            --gap: 100px;
        }
        section {
            flex-direction: row;
        }

        div {
            justify-content: flex-start;
            height: 150px;
            padding-top: 30px !important;
        }

        div:not(:first-child){
            border-top: none;
            padding-top: 0;
            border-left: 2px solid black;
            padding-left: calc(var(--gap) / 2);
        }
    }

    @media (min-width: 750px) {
        main {
            --gap: 200px;
        }
    }
</style>