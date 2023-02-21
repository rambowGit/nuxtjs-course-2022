<template>
	<h1>Profile page!</h1>
</template>

<script setup>
	
	definePageMeta({
		layout: "sidebar",
		middleware: ["auth"]
		
		// middleware: () => {
		// 	console.log("I am from middleware");
		// 	const auth = useAuth();
		// 	return auth.value.isAuthenticated;
		// }
	});
</script>