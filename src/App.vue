<script>
export default {};
</script>

<template>
	<div>Header</div>
	<router-view></router-view>
</template>

<style lang="scss">
@import url('./assets/colors.css');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
	.p-button-label {
		padding: 5px;
	}
}
</style>
