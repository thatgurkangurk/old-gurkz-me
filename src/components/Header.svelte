<script lang="ts">
	import Link from "./NavLink.svelte";
    import { signIn, signOut } from "@auth/sveltekit/client";
	import type { Session } from "@auth/core/types";
    export let session: Session | null;
</script>
<h1 class="text-2xl text-center">gurkan's website</h1>  
<div class="text-center">
    <Link to="/">home</Link>
    <Link to="/smp">smp</Link>
    {#if session}
        <div>
            <p>welcome, <strong>{session.user?.name}</strong></p>
            <button on:click={() => signOut()} class="underline">sign out</button>
        </div>
    {:else}
        <div>
            <button on:click={() => signIn("discord")} class="underline">sign in</button>
        </div>
    {/if}
</div>