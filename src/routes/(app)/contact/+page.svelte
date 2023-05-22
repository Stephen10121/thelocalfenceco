<script lang="ts">
    import { superForm } from "sveltekit-superforms/client";
    import { newSchema } from "../../../functions/quotePageSchema.js";
    import SuperInput from "../../../components/SuperInput.svelte";
    import { showNotification } from "../../../functions/store.js";

    export let data;
    let submitted = false;
    let fenceClickParamInput: HTMLInputElement;

    const { form, errors, enhance } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave?",
        validators: newSchema,
        onUpdate(event) {
            submitted = event.form.valid;
        },
    });

    $: {
        if (submitted) {
            showNotification.set("Request Sent!");
            setTimeout(() => {
                showNotification.set(null);
                submitted = false;
            }, 6000);
        }
    }

    $form.fenceClicked = data.fenceClicked;
</script>

<main>
    <section class="section-welcome">
        <h1>Request a free quote!</h1>
        <h2 class="location-h2">We Are in <span>Vancouver, Washington</span></h2>
    </section>
    <section class="form">
        <form method="POST" use:enhance>
            <SuperInput placeholder="Name" name="name" id="name" bind:errorMsg={$errors.name} bind:value={$form.name}/>
            <SuperInput placeholder="Email" name="contactMethod" id="contactMethod" type="email" bind:errorMsg={$errors.contactMethod} bind:value={$form.contactMethod} />
            <SuperInput placeholder="Description" name="aboutContact" id="aboutContact" bind:errorMsg={$errors.aboutContact} bind:value={$form.aboutContact} />
            <input type="hidden" bind:this={fenceClickParamInput} name="fenceClicked" bind:value={$form.fenceClicked} />
            <button>Send</button>
        </form>
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
        color: #5a3b0d;
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

    .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        max-width: 700px;
        gap: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        padding: 10px;
        /* background-color: red; */
    }

    button {
        width: 100%;
        height: 40px;
        border-radius: 7px;
        border: none;
        padding: 0 10px;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        background-color: #dfdfdf;
        cursor: pointer;
        font-weight: bold;
        color: #5a3b0d;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
</style>