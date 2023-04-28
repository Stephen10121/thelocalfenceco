<script lang="ts">
    import { superForm } from "sveltekit-superforms/client";
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
    import { newSchema } from "../../../../functions/quotePageSchema.js";
    import SuperInput from "../../../../components/SuperInput.svelte";

    export let data;
    const { form, errors, enhance } = superForm(data.form, {
        taintedMessage: "Are you sure you want to leave?",
        validators: newSchema
    });

    $: {
        console.log(data);
    }
</script>
<SuperDebug data={$form} />
<main>
    <form method="POST" use:enhance>
        <SuperInput placeholder="Name" name="name" id="name" errorMsg={$errors.name} bind:value={$form.name}/>
        <SuperInput placeholder="Username" name="username" id="username" errorMsg={$errors.username} bind:value={$form.username} />
        <SuperInput placeholder="Password" name="password" type="password" id="password" errorMsg={$errors.password} bind:value={$form.password} />
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