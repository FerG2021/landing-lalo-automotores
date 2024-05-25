<script>
export default {
	props: {
		icon: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		}
	}
};
</script>

<template>
	<div class="description-item-container">
		<i :class="icon" class="icon" style="font-size: 1rem"></i>
		<span>
			{{ title }}
		</span>
	</div>
</template>

<style lang="scss" scoped>
.description-item-container {
	color: var(--grey);
	.icon {
		margin-right: 10px;
	}
}
</style>