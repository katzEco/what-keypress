<script lang="ts">
	import { page } from '$app/stores';

	const button = 'block p-4 w-auto hover:bg-[rgba(0,0,0,0.6)] hover:opacity-60 hover:cursor-pointer'
	const activeButton = `${button} bg-[rgba(0,0,0,0.6)]`
</script>

<div class="w-full bg-[rgba(0,0,0,0.4)] fixed top-0 flex flex-row">
	<div class="w-full flex flex-row justify-start items-center">
		{#if ($page.url.pathname === '/')}
			<div class={activeButton}>
				what did i press?
			</div>
		{:else}
			<a href="/" class={button}>
				what did i press?
			</a>
		{/if}
	</div>
	<div class='w-full flex flex-row justify-end items-center'>
		{#if ($page.url.pathname === '/about')}
			<div class={activeButton}>
				About
			</div>
		{:else}
			<a href="/about" class={button}>
				About
			</a>
		{/if}
	</div>
</div>
