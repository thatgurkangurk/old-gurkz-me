import { getStatus } from "$lib/minecraft";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const status = await getStatus("java.gurkz.me");
    return { status }
}) satisfies PageServerLoad;