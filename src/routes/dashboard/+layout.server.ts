import { redirect } from "@sveltejs/kit";
import { COOKIE } from "../../functions/variables";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({cookies}) => {
    if (cookies.get("session") !== COOKIE) throw redirect(302, "/admin");
    return { test: "wow" }
}) satisfies LayoutServerLoad;