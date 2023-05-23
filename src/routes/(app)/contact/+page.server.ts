import { fail } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms/server";
import { newSchema } from "../../../functions/quotePageSchema";
import nodeMailer from "nodemailer";
import { addContactRequest } from "../../../functions/serverData";

export async function load(event) {
    const form = await superValidate(event, newSchema);
    const params = event.url.searchParams.get("fenceType") || "none";
    
    return {
        form,
        fenceClicked: params
    }
}

async function sendForm(name: string, from: string, about: string) {
    try {
        const data = await fetch("https://mail.gruzservices.com/sendMail", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "from": from,
                "about": about,
                "password": import.meta.env.VITE_PASSWORD
            })
        });
        const dataJson = await data.json();
        console.log(dataJson);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
    // let transporter = nodeMailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         type: "OAUTH2",
    //         user: import.meta.env.VITE_USER_EMAIL,
    //         clientId: import.meta.env.VITE_CLIENT_ID,
    //         clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    //         refreshToken: import.meta.env.VITE_REFRESH_TOKEN
    //     }
    // });

    // let info;
    // try {
    //     info = await transporter.sendMail({
    //         from: "Local Fence Co Email <test@thelocalfenceco.com>",
    //         to: "lbrandon10121@gmail.com",
    //         subject: "Testing fence.",
    //         html: data
    //     });
    // } catch (err) {
    //     console.log(err);
    //     return false;
    // }

    // console.log(`Message sent: ${info.messageId}. URL: ${nodeMailer.getTestMessageUrl(info)}`);
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, newSchema);

        if (!form.valid) {
            return fail(400, { form });
        }

        const html = `
            <h1>${form.data.name}</h1>
            <h2>${form.data.contactMethod}</h2>
            <p>${form.data.aboutContact}</p>
            <p>Fence Clicked: ${form.data.fenceClicked}</p>
        `;

        console.log(await sendForm(form.data.name, form.data.contactMethod, form.data.aboutContact));

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