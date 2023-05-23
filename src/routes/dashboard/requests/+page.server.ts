import { contactRequests } from "../../../functions/serverData";

export async function load({ parent }) {
    await parent();
    return {
        requests: contactRequests
    }   
}