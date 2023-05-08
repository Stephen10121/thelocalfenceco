<script lang="ts">
    import ContactCard from "../../../../components/ContactCard.svelte";

</script>
<main>
    <section class="section-welcome">
        <h1>Lets get in touch!</h1>
        <h2 class="location-h2">We Are in <span>Vancouver Washington</span></h2>
    </section>
    <section class="cards">
        <ContactCard iconDescription={{iconLink:"/icons/phone.svg", iconDesc:"Phone Icon", name:"Telephone"}}>
            <a href="tel:3601234567">(360)-123-4567</a>
        </ContactCard>
        <div class="dividor" />
        <ContactCard iconDescription={{iconLink:"/icons/mail.svg", iconDesc:"Envelope Icon", name:"Email us"}}>
            <a href="mailto:email@email.com">email@email.com</a>
        </ContactCard>
        <div class="dividor" />
        <ContactCard iconDescription={{iconLink:"/icons/map.svg", iconDesc:"Map Icon", name:"Location"}}>
            <p>City, State</p>
        </ContactCard>
    </section>
</main>
<style>
    main {
        min-height: 100%;
        padding: 20px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 60px;
        --gap: 10px;
    }

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: clamp(1.75rem, -1.5rem + 8vw, 2.25rem);
    }

    .location-h2 {
        font-family: "Poppins", sans-serif;
        font-size: clamp(1rem, -1.5rem + 8vw, 1.5rem);
    }

    .location-h2 span {
        color: #28583b;
    }

    .section-welcome {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
        height: 70px;
    }

    .section-welcome h2 {
        font-family: "Poppins", sans-serif;
        font-size: 1.2rem;
    }

    .cards {
        display: flex;
        gap: var(--gap);
        flex-direction: column;
    }

    .dividor {
        width: 200px;
        height: 1px;
        background-color: black;
    }

    p,
    a {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        color: black;
    }

    @media (min-width: 700px) {
        main {
            --gap: 10px;
        }

        .dividor {
            width: 1px;
            height: 200px;
        }

        .cards {
            flex-direction: row;
        }
    }

    @media (min-width: 750px) {
        main {
            --gap: 30px;
        }
    }

    @media (min-width: 900px) {
        main {
            --gap: 60px;
        }
    }
</style>