<script lang="ts">
	import { navigating } from '$app/stores';
	import Header from '../components/Header.svelte';
	import '../styles/global.css';
	import NProgress from 'nprogress';
    import 'nprogress/nprogress.css';

	NProgress.configure({
		minimum: 0.16,
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<header class="pb-2">
	<Header />
</header>
<main>
	<slot />
</main>