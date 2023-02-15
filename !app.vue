<template>
	<HomeWelcome />
	
	<NuxtPage />
	
	<p>
		<button @click="toggle">Toggle</button>
	</p>
	
	<component :is="MyComponent" />
	<!-- <Counter /> -->
</template>


<script setup>

const MyComponent = shallowRef(resolveComponent("Counter"));

function toggle() {
	MyComponent.value = resolveComponent("HomeWelcome");
}

</script>