import { announcementBanner } from "../../functions/serverData";

export async function load() {
    console.log(announcementBanner);
    return {
        announcement: announcementBanner
    }
}