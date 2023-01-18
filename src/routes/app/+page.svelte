<script lang="ts">
	import type { PageData } from "./$types";
	import type { Todo } from "$lib/types/todo";
	import TodoComponent from "$lib/components/TodoComponent.svelte";
	import Button from "$lib/components/Button.svelte";
	import { onMount } from "svelte";

	export let data: PageData;

	let todos: Todo[] = [
		{ id: 11, title: "item11", isDone: false },
		{ id: 12, title: "item12", isDone: false },
		//{ id: 13, title: "item13", isDone: false },
		//{ id: 14, title: "item14", isDone: false },
		//{ id: 15, title: "item15", isDone: true },
		//{ id: 16, title: "item16", isDone: true },
		//{ id: 17, title: "item16", isDone: false },
		//{ id: 18, title: "item16", isDone: false },
		//{ id: 19, title: "item16", isDone: false },
		//{ id: 20, title: "item16", isDone: false },
		//{ id: 21, title: "item16", isDone: false },
		//{ id: 22, title: "item16", isDone: false },
		//{ id: 23, title: "item16", isDone: false },
		//{ id: 24, title: "item16", isDone: false },
		//{ id: 25, title: "item16", isDone: false },
		//{ id: 26, title: "item16", isDone: false },
		//{ id: 27, title: "item16", isDone: false },
		//{ id: 28, title: "item16", isDone: false },
		//{ id: 29, title: "item16", isDone: false },
		//{ id: 30, title: "item16", isDone: false },
		//{ id: 31, title: "item16", isDone: false },
		//{ id: 32, title: "item16", isDone: false },
		//{ id: 33, title: "item16", isDone: false },
		//{ id: 34, title: "item16", isDone: false },
		//{ id: 35, title: "item16", isDone: false },
	];

	function onDelete() {
		todos = todos.filter((todo) => todo.isDone === false);
	}
	onMount(async () => {
		let id = 14;
		while (true) {
			await delay(200);
			todos.push({
				id,
				title: `item${id}`,
				isDone: false,
			});
			todos = todos;
			id++;
		}
	});
	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
</script>

<svelte:head>
	<title>Glance | Todos</title>
</svelte:head>

<div class="flex flex-col">
	<h1 class="font-bold mb-4 text-4xl leading-none">Your Todos</h1>
	<div class="create-todo create-top" />

	<section
		class="custom-scrollbar mt-4 custom-height w-[800px] m-auto border-2 border-red-500 overflow-y-auto"
	>
		<div class="w-full">
			{#each todos as todo (todo.id)}
				<TodoComponent data={todo} />
				<div class="h-6" />
			{/each}
		</div>
	</section>
	<div class="create-todo create-bottom" />

	<!-- {#each todos as todo (todo.id)}
	<p>{todo.name}</p>
{/each} -->
	<div />
	<div class="absolute bottom-4 left-1/2 -translate-x-1/2 h-fit-content">
		<Button click={onDelete} btnText="Delete Done" isGreen={false} />
	</div>
</div>

<style>
	.custom-height {
		max-height: calc(100vh - 32px - 144px - 64px);
	}
	.custom-scrollbar {
		scrollbar-color: #ff5e5b #56e39f;
		scrollbar-width: thin;
	}

	.custom-scrollbar::-webkit-scrollbar {
		background-color: #56e39f;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background-color: #ff5e5b;
		width: 5px;
		height: 3px;
	}
</style>
