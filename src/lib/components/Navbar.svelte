<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	async function signout() {}
</script>

<nav class="flex justify-between h-[76px] p-4 items-center">
	<div class="h-8 flex align-center">
		<a href="/"><p>Glance</p></a>
	</div>
	<Button btnText="Logout" />
</nav>
