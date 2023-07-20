<script lang="ts">
	import { page } from "$app/stores";

    export let to: string;
</script>

<a href={to} class={`${$page.url.pathname === to ? "text-themeColor underline underline-offset-4" : ""}`}><slot /></a>