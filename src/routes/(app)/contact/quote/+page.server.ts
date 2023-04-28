import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { newSchema } from "../../../../functions/quotePageSchema";

export async function load(event) {
    const form = await superValidate(event, newSchema);

    return {
        form
    }
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, newSchema);
        console.log(form);

        if (!form.valid) {
            return fail(400, {form});
        }

        return { form }
    }
}