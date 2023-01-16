<script lang="ts">
	import type { MaybePromise } from "@sveltejs/kit/types/internal";

	export let btnText: string;
	export let click: () => MaybePromise<void> = async () => {};
	export let isGreen: boolean = true;
</script>

<button
	on:click={click}
	class="border-secondary h-12 text-secondary border-2 border-solid rounded-[64px] px-12 flex items-center"
	class:border-primary={isGreen}
	class:text-primary={isGreen}><span class="align-middle">{btnText}</span></button
>
