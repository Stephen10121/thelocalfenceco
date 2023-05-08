import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { newSchema } from "../../../functions/quotePageSchema";
import nodeMailer from "nodemailer";

export async function load(event) {
    const form = await superValidate(event, newSchema);
    const params = event.url.searchParams.get("fenceType") || "none";
    
    return {
        form,
        fenceClicked: params
    }
}

async function sendForm(data: string) {
    const config = {
        service: "gmail",
        auth: {
            user: import.meta.env.VITE_USER_EMAIL,
            pass: import.meta.env.VITE_USER_PASS
        }
    }

    console.log(config);

    let transporter = nodeMailer.createTransport(config);

    let info;
    try {
        info = await transporter.sendMail({
            from: "Local Fence Co Email <test@thelocalfenceco.com>",
            to: "lbrandon10121@gmail.com",
            subject: "Testing fence.",
            html: data
        });
    } catch (err) {
        console.log(err);
        return false;
    }

    console.log(`Message sent: ${info.messageId}. URL: ${nodeMailer.getTestMessageUrl(info)}`);
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

        console.log(await sendForm(html));

        console.log({form});

        return { form }
    }
}