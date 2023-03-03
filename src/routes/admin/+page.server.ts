import { error, redirect } from '@sveltejs/kit';
import { COOKIE, PASSWORD } from '../../functions/variables';
import type { Actions, PageServerLoad } from './$types';

export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();
        
        const passCode = formData.get("password");
        if (!passCode) throw error(400, "Missing Parameters.")
        if (passCode !== PASSWORD) throw error(401, "Invalid Password");
        cookies.set('session', COOKIE, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30
        });
        throw redirect(302, '/dashboard');
    }    
} satisfies Actions;
 
export const load = (async ({cookies}) => {
    if (cookies.get("session") === COOKIE) throw redirect(302, "/dashboard");
    return { test: "wow" }
}) satisfies PageServerLoad;