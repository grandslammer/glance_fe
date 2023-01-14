<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	async function signInWithGoogle() {}
</script>

<div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
	<h2 class="text-4xl">We couldn’t find a todo app that worked the way we wanted.</h2>
	<h2 class="text-4xl">So we built our own.</h2>
	<br />
	<h1 class="text-8xl">Welcome to Glance</h1>
	<Button btnText="Login with Google" />
	<!-- TODO Delete app link before release -->
	<h3><a href="/app">App</a></h3>
</div>
