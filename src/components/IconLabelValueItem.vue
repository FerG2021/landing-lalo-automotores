<script>
export default {
	props: {
		icon: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		value: {
			type: String,
			required: true
		}
	}
};
</script>

<template>
	<div class="main-container">
		<i :class="icon" class="icon" style="font-size: 1.5rem" />
		<span class="label">
			{{ label }}
		</span>
		<span>
			{{ value }}
		</span>
	</div>
</template>

<style lang="scss" scoped>
.main-container {
	display: flex;
	align-items: center;
	padding: 5px;
	font-size: 24px;
	margin-left: 20px;
	.icon {
		margin-right: 10px;
		color: var(--primary);
	}
	.label {
		margin-right: 5px;
	}
}

</style>