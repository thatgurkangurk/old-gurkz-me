import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from "@auth/core/providers/discord";
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, AUTH_SECRET } from "$env/static/private";
import type { Handle } from "@sveltejs/kit";
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from "$lib/prisma";

export const handle = SvelteKitAuth({
  providers: [Discord({ clientId: DISCORD_CLIENT_ID, clientSecret: DISCORD_CLIENT_SECRET })],
  secret: AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
}) satisfies Handle;