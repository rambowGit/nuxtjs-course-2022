<template>
	<div>
		<p>iphone {{ name }}</p>
	</div>
</template>

<script setup>
	
		const route = useRoute();
		
		const name = computed(() => {
			return route.params.name.replaceAll("-"," ");
		})

</script>

<style scoped>

</style>