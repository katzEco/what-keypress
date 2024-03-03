<script lang="ts">
  import '../app.css'

  import Header from '$lib/Components/navbar.svelte';
  import Footer from '$lib/Components/footer.svelte';
</script>

<div class="text-whitesmoke w-full">
	<Header />

	<main class="min-h-screen w-full bg-jet text-whitesmoke py-16">
		<slot />
	</main>

	<Footer />
</div>

<style>
	
</style>