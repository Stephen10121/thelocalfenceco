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
    let transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: "stephengrzn@gmail.com",
            accessToken: import.meta.env.VITE_EMAIL_ACCESS_TOKEN,
            refreshToken: import.meta.env.VITE_EMAIL_REFRESH_TOKEN
        }
    });

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

    console.log(`Message sent: ${info.messageId}`);
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