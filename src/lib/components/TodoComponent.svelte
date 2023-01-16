<script lang="ts">
	import type { Todo } from "$lib/types/todo";
	export let data: Todo;

	let disabled: boolean = true;
</script>

<div>
	<div
		class="m-auto block bg-primary rounded-[64px] min-h-[36px] px-2 py-4 cursor-pointer text-4xl w-full"
	>
		{#if disabled}
			<div
				on:click|preventDefault={(e) => {
					disabled = false;
				}}
			>
				<p>{data.title}</p>
			</div>
		{:else}
			<textarea class="resize-none bg-transparent">{data.title}</textarea>
		{/if}
	</div>
</div>
