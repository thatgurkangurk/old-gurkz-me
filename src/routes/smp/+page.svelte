<script lang="ts">
	import { copy } from 'svelte-copy';
	import { createQuery } from '@tanstack/svelte-query';
	import { toast } from '@zerodevx/svelte-toast';
	import { getStatus } from '$lib/minecraft';
	import type { PageServerData } from './$types';
	import nProgress from 'nprogress';
	import ServerDetails from '../../components/ServerDetails.svelte';

	export let data: PageServerData;

	function copyToClipboardToast() {
		toast.push('Copied to clipboard!', {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		});
	}

	$: query = createQuery({
		queryKey: ['status'],
		queryFn: async () => await getStatus('mc.gurkz.me'),
		initialData: data.status,
		refetchInterval: 3000
	});

	$: {
		if ($query.isRefetching) {
			nProgress.start();
		}

		if ($query.isError || $query.isSuccess) {
			nProgress.done();
		}
	}
</script>

<h1 class="text-xl">hi! i have a minecraft smp!</h1>

<section class="p-2 text-center">
	<h2 class="underline text-lg">instructions on how to join</h2>

	<div class="pb-4">
		<p class="pb-2">
			if you're on java edition the IP is <button
				use:copy={'java.gurkz.me'}
				on:svelte-copy={() => copyToClipboardToast()}
				class="cursor-pointer">java.gurkz.me</button
			>
		</p>

		<p>
			if you're on bedrock edition the IP is <button
				use:copy={'bedrock.gurkz.me'}
				on:svelte-copy={() => copyToClipboardToast()}
				class="cursor-pointer">bedrock.gurkz.me</button
			>, and the port is 19132
		</p>
	</div>

	<ServerDetails status={$query.data} />
</section>
