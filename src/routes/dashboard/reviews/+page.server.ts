import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({parent}) => {
    await parent();
    return { test: "wow" }
}) satisfies PageServerLoad;