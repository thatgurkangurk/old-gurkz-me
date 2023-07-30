<script lang="ts">
	export let user: {
		name?: string | null;
		email?: string | null;
		image?: string | null;
	};
</script>

{#if !user}
	<p>no user</p>
{:else}
    <p class="mt-4 underline">account details for {user.name}</p>
	<p><span>username: </span>{user.name}</p>
    <p><span>email: </span>{user.email}</p>
    
    <div class="flex flex-col items-center justify-center">
        <p><span>profile picture</span></p>
        <img class="rounded-full" width={64} height={64} alt={`${user.name}'s profile picture'`} src={user.image} />
    </div>
    
{/if}
