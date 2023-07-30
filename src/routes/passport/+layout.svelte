<script lang="ts">
	import { page } from '$app/stores';
	import ProviderList from '../../components/ProviderList.svelte';
</script>

<div class="text-center">
	{#if $page.data.session}
		<h1 class="text-2xl">welcome to passport, {$page.data.session.user?.name}</h1>
		<slot />
	{:else}
        <ProviderList />
	{/if}
</div>