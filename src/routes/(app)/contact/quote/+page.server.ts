import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { newSchema } from "../../../../functions/quotePageSchema";

export async function load(event) {
    const form = await superValidate(event, newSchema);
    const params = event.url.searchParams.get("fenceType") || "none";
    
    return {
        form,
        fenceClicked: params
    }
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, newSchema);

        if (!form.valid) {
            return fail(400, {form});
        }

        return { form }
    }
}