<script lang="ts">
    import { superForm } from "sveltekit-superforms/client";
    import { newSchema } from "../../../functions/quotePageSchema.js";
    import SuperInput from "../../../components/SuperInput.svelte";

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

    $form.fenceClicked = data.fenceClicked;
</script>

<main>
    {#if submitted}
        <h1>Form Submitted.</h1>
    {/if}
    <form method="POST" use:enhance>
        <SuperInput placeholder="Name" name="name" id="name" errorMsg={$errors.name} bind:value={$form.name}/>
        <SuperInput placeholder="Email" name="contactMethod" id="contactMethod" type="email" errorMsg={$errors.contactMethod} bind:value={$form.contactMethod} />
        <SuperInput placeholder="About" name="aboutContact" id="aboutContact" errorMsg={$errors.aboutContact} bind:value={$form.aboutContact} />
        <input type="hidden" bind:this={fenceClickParamInput} name="fenceClicked" bind:value={$form.fenceClicked} />
        <button>Send</button>
    </form>
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

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>