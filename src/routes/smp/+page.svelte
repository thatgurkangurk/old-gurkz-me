<script lang="ts">
	import { copy } from 'svelte-copy';
	import { toast } from '@zerodevx/svelte-toast';
</script>

<h1 class="text-xl">hi! i have a minecraft smp!</h1>

<section class="p-2 text-center">
	<h2 class="underline text-lg">instructions on how to join</h2>

	<p class="pb-2">
		if you're on java edition the IP is <span
			use:copy={'java.gurkz.me'}
			on:svelte-copy={() => {
				toast.push('Copied to clipboard!', {
					theme: {
						'--toastColor': 'mintcream',
						'--toastBackground': 'rgba(72,187,120,0.9)',
						'--toastBarBackground': '#2F855A'
					}
				});
			}}
			class="cursor-pointer">java.gurkz.me</span
		>
	</p>

	<p>
		if you're on bedrock edition the IP is <span
			use:copy={'bedrock.gurkz.me'}
			on:svelte-copy={() => {
				toast.push('Copied to clipboard!', {
					theme: {
						'--toastColor': 'mintcream',
						'--toastBackground': 'rgba(72,187,120,0.9)',
						'--toastBarBackground': '#2F855A'
					}
				});
			}}
			class="cursor-pointer">bedrock.gurkz.me</span
		>, and the port is 19132
	</p>
</section>
