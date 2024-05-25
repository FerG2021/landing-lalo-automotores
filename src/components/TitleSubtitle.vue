<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: true
		}
	}
};
</script>

<template>
	<div class="main-container">
		<h1 class="title"> {{ title }} </h1>
		<h2 class="subtitle"> {{ subtitle }} </h2>
	</div>
</template>

<style lang="scss" scoped>
.main-container {
	text-align: center;
	.subtitle {
		color: var(--grey);
	}
}
</style>