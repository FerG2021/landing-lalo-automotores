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
		}
	}
};
</script>

<template>
	<button>
		<i
			:class="icon"
			style="font-size: 1rem"
		/>
		<p>
			{{ label }}
		</p>
	</button>
</template>

<style lang="scss" scoped>
button {
	display: flex;
	align-items: center;
	cursor: pointer;
	i {
		margin-right: 5px;
	}
}
</style>