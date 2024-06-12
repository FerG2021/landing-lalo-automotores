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
	<a :href="item.url" target="_blank" class="a-contact">
		<i
			:title="item.title"
			:class="item.icon"
		/>
	</a>
</template>

<style lang="scss" scoped>
.a-contact {
	color: var(--grey);
	i {
		font-size: 1.8rem;
		transition: transform 0.3s ease;
		&:hover {
			transform: scale(1.2);
		}
	}

}
</style>