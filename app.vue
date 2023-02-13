<template>
  <div>
    <p>Hello World!</p>
  
		<button @click="increment">Increment</button>
		<p>{{ count }}</p>
		<button @click="decrement">Decrement</button>
	</div>
</template>

<script setup>
	const count = ref(0);
	
	const increment = () => count.value++;
	const decrement = () => count.value--;
	

</script>

<<<<<<< HEAD
=======
<!-- <script>
export default {
	data () {
		return {
			count: 0
		}
	},
	methods: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		}
	}
};
</script> -->
>>>>>>> af4e0effa7d2faa238137197e992a0969892c27f
