import axios from 'axios'
import { z } from 'zod';

const statusSchema = z.object({
    online: z.boolean(),
    status: z.boolean(),
    favicon_base64: z.string(),
    favicon: z.string().url(),
    source: z.string(),
    took: z.number(),
    cache: z.object({
        status: z.string(),
        ttl: z.number(),
        insertion_time: z.string().datetime(),
    }),
    version: z.object({
        name: z.string(),
        protocol: z.number(),
    }),
    players: z.object({
        max: z.number(),
        online: z.number(),
    }),
    description: z.string(),
    fetch: z.string().datetime(),
})

export type Status = z.infer<typeof statusSchema>

export async function getStatus(address: string) {
    const res = await axios.get<Status>(`https://eu.mc-api.net/v3/server/ping/${address}`);
    const { data } = await res;
    return data;
}