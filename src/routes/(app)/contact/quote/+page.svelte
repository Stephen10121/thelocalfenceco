<script lang="ts">
    import { superForm } from "sveltekit-superforms/client";
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
    import { newSchema } from "../../../../functions/quotePageSchema.js";
    import SuperInput from "../../../../components/SuperInput.svelte";

    export let data;
    let fenceClickParamInput: HTMLInputElement;

    const { form, errors, enhance } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave?",
        validators: newSchema,
        onSubmit(event) {
            $form.fenceClicked = data.fenceClicked;
            console.log({submitEvent: event});
        },
        onResult(event) {
            console.log({resultEvent: event});
        },
    });
    $form.fenceClicked = data.fenceClicked;
    $: {
        console.log(data);
    }

</script>
<SuperDebug data={$form} />
<main>
    <form method="POST" use:enhance>
        <SuperInput placeholder="Name" name="name" id="name" errorMsg={$errors.name} bind:value={$form.name}/>
        <SuperInput placeholder="Email" name="email" id="email" type="email" errorMsg={$errors.contactMethod} bind:value={$form.contactMethod} />
        <SuperInput placeholder="About" name="about" id="about" errorMsg={$errors.aboutContact} bind:value={$form.aboutContact} />
        <input type="hidden" bind:this={fenceClickParamInput} name="fenceTypeClicked" bind:value={$form.fenceClicked} />
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