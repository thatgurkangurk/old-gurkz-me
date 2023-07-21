<script lang="ts">
	import type { Status } from "$lib/minecraft";
	import Link from "./Link.svelte";

    export let status: Status;
    const cleanVersion = status.version.name.replace(/[^\d.-]/g, '');
</script>

{#if status.online}
    <h1>Currently there are {status.players.online} players online.</h1>
    <h1>To join you need to play on version {cleanVersion}. If you need help changing versions, follow the directions on the <Link to="https://help.minecraft.net/hc/en-us/articles/360034754852" underlined>Changing game versions</Link> support page.</h1>
{:else}
    <h1>The server is not online.</h1>
{/if}

<p class="text-gray-500 text-sm">refetches every 3 seconds</p>