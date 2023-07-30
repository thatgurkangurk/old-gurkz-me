<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
</script>

<h1 class="text-xl">please choose a way to sign in</h1>
<p class="text-gray-400 italic mb-2">
	currently, we only support discord accounts, if you need any other methods, please <a href="mailto:hello@gurkz.me" class="underline">send me an email</a>
</p>
<button on:click={() => signIn('discord')} class="discord p-4">
    <img
        loading="lazy"
        height="128"
        width="128"
        src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"
        alt="discord logo"
    />
</button>

<style>
	.discord {
		border-radius: 0.7rem;
		background-color: #5865f2;
	}
</style>
