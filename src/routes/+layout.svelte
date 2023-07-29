<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import { navigating, page } from '$app/stores';
	import Header from '../components/Header.svelte';
	import '../styles/global.css';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	NProgress.configure({
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<SvelteToast options={{ reversed: true, intro: { y: 64 }, duration: 2000 }} />
	<header class="pb-2">
		<Header session={$page.data.session} />
	</header>
	<main>
		<slot />
	</main>
</QueryClientProvider>
