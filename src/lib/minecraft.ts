import axios from 'axios'
import { z } from 'zod';

const statusSchema = z.object({
    online: z.boolean(),
    version: z.object({
        name: z.string(),
        protocol: z.number()
    }),
    players: z.object({
        max: z.number(),
        online: z.number()
    }),
    description: z.string(),
    favicon: z.string().optional(),
    ping: z.number().optional(),
})

export type StatusOptions = {
    /** @default true */
    checkPing?: boolean;
    /** @default 5000 // ms */
    timeout?: number;
    /** @default 763 // 1.20.1 */
    protocol?: number;
}

export type Status = z.infer<typeof statusSchema>

export async function getStatus(address: string) {
    const res = await axios.get<Status>(`https://gurkz.me/minecraft/status/${address}`);
    const { data } = await res;
    return data;
}