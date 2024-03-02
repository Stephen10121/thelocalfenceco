import { fail } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms/server";
import { newSchema } from "../../../functions/quotePageSchema";
import { addContactRequest } from "../../../functions/serverData";
import { Resend } from 'resend';

export async function load(event) {
    const form = await superValidate(event, newSchema);
    const params = event.url.searchParams.get("fenceType") || "none";
    
    return {
        form,
        fenceClicked: params
    }
}

async function sendForm(html: string) {
    const resend = new Resend(import.meta.env.VITE_RESEND_KEY);
    const { data, error } = await resend.emails.send({
        from: "contact@mail.thelocalfenceco.com",
        to: 'thelocalfenceco@gmail.com',
        subject: 'Website Contact Form',
        html
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, newSchema);

        if (!form.valid) {
            return fail(400, { form });
        }

        const html = `
            <h1>Name: ${form.data.name}</h1>
            <h2>Contact Method: ${form.data.contactMethod}</h2>
            <p>About: ${form.data.aboutContact}</p>
            <p>Fence Clicked: ${form.data.fenceClicked}</p>
        `;

        console.log(await sendForm(html));

        console.log({form});
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + ". "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        addContactRequest({ name: form.data.name, about: form.data.aboutContact, from: form.data.contactMethod, when: datetime });

        event.setHeaders({
            'Access-Control-Allow-Origin': `*`
        });

        return { form }
    }
}