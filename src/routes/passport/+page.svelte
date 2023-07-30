<script lang="ts">
	import { signOut } from "@auth/sveltekit/client";
	import AccountDetails from "../../components/AccountDetails.svelte";
	import { page } from "$app/stores";
</script>
<p>not much to do here... but you can <button on:click={() => signOut()} class="underline">sign out!</button></p>

<AccountDetails user={$page.data.session?.user} />