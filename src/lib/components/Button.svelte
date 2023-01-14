<script lang="ts">
	export let btnText: string;
	export let click: () => Promise<void> = async () => {};
	export let isGreen: boolean = true;
</script>

<button
	on:click={click}
	class="border-secondary text-secondary border-2 border-solid rounded-[64px] py-4 px-12"
	class:border-primary={isGreen}
	class:text-primary={isGreen}><span>{btnText}</span></button
>
