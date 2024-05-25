<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	}
};
</script>

<template>
	<i
		:title="item.title"
		:class="item.icon"
	/>
</template>

<style lang="scss" scoped>
i {
	font-size: 1.8rem;
}
</style>