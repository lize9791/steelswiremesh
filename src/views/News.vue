<template>
	<div v-for="item in arr" :key="item" class="item">
		<button @click="btnClick" :name="item">添加</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			arr: [1],
		}
	},
	methods: {
		btnClick(e) {
			let { name } = e.target
		},
	},
}
</script>

<style lang="scss">
.item {
	width: 50%;
	height: 500px;
	margin: 30px auto;
	box-shadow: 0 0 10px #ccc;
	border-radius: 8px;
}
</style>
