<script lang="ts">
    export let to: string;
    export let underlined: boolean;
</script>

<a href={to} class={`${underlined ? "text-themeColor underline underline-offset-4" : ""}`}><slot /></a>