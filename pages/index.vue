<template>
  
	<p>
		<button @click="moveToAbout">Take me to About Page</button>
	</p>
	
	<h1>Index Page</h1>
</template>

<script setup>
	function moveToAbout() {
		navigateTo("about");
	}

</script>

