import type { Status, StatusOptions } from "$lib/minecraft";
import { Client, PacketWriter, State } from "mcproto";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";

const defaultOptions: Partial<StatusOptions> = {
    checkPing: true,
    timeout: 5000,
    protocol: 736,
};

export const GET = (async ({ params }) => {
    const { address } = params;

    const client = await Client.connect(address, 25565, {
        connectTimeout: defaultOptions.timeout,
        timeout: defaultOptions.timeout
    }).catch((err) => console.error("connection error", err.stack));

    if (!client) {
        return json(JSON.stringify({
            online: false,
            version: {
                name: "",
                protocol: 0,
            },
            players: {
                max: 0,
                online: 0,
            },
            description: "",
        }))
    } else {
        client.send(
            new PacketWriter(0x0)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .writeVarInt(defaultOptions.protocol!)
                .writeString(address)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .writeUInt16(client.socket.remotePort!)
                .writeVarInt(State.Status)
        )

        client.send(new PacketWriter(0x0));

        const status: Status = (await client.nextPacket()).readJSON();

        status.online = true;

        if (defaultOptions.checkPing) {
            client.send(new PacketWriter(0x1).write(Buffer.alloc(8)));
            const start = Date.now();

            await client.nextPacket(0x1);
            status.ping = Date.now() - start;
        }

        client.end();

        const options: ResponseInit = {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=0, s-maxage=1, stale-while-revalidate"
            }
        }

        return json(status, options)
    }
}) satisfies RequestHandler