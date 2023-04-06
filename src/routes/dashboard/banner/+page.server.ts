import { error } from "@sveltejs/kit";
import type { Actions } from './$types';
import { announcementBanner } from "../../../functions/serverData";

export const actions = {
    updateBanner: async ({ request }) => {
        const formData = await request.formData();

        const strong = formData.get("strong"),
        value = formData.get("val"),
        isPublic = formData.get("announcementpublic"),
        backgroundColor = formData.get("backgroundColor"),
        textColor = formData.get("textColor");

        console.log({
            value,
            isPublic,
            backgroundColor,
            textColor,
            strong
        });
        if (typeof strong!=="string" || typeof value !=="string" || !(typeof isPublic=="string" || isPublic==null) || typeof backgroundColor!=='string' || typeof textColor!=="string") {
            console.log("got an arror")
            throw error(400, "Missing Parameters");
        }
        let newBanner = announcementBanner;
        newBanner.backgroundColor = backgroundColor;
        newBanner.show = isPublic==="on";
        newBanner.strong = strong;
        newBanner.textColor = textColor;
        newBanner.val = value
        return {msg: "nice"}
    }
} satisfies Actions;


export async function load() {
    return {
        announcement: {
            announcementBanner
        }
    }
}