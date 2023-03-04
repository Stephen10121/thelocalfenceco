import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../admin/$types";

export const load = (async ({cookies}) => {
    cookies.delete("session");
    throw redirect(302, "/");
}) satisfies PageServerLoad;