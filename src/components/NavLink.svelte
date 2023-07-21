<script lang="ts">
    import Link from "./Link.svelte";
	import { page } from "$app/stores";

    export let to: string;
    $page.url.pathname === to
</script>

<Link underlined={$page.url.pathname === to} to={to}><slot /></Link>