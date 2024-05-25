<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	computed: {
		title() {
			return this.item.title.toUpperCase();
		}
	},
	methods: {
		clickToRoute() {
			this.$router.push(this.item.path);
		}
	}
};
</script>

<template>
	<p>
		<a @click="clickToRoute()">
			{{ title }}
		</a>
	</p>
</template>

<style lang="scss" scoped>
p {
	transition: transform 0.3s ease;
	a {
		text-decoration: none;
		color: var(--grey);
		cursor: pointer;
	}
	&:hover {
		transform: scale(1.2);
	}
}
</style>