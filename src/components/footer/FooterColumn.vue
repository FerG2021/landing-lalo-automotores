<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		items: {
			typpe: Array,
			required: true
		},
		nameProperty: {
			type: String,
			required: true
		}
	}
};
</script>

<template>
	<div class="footer-column-container">
		<div class="title">
			{{ title }}
		</div>
		<div class="items-container">
			<div
				v-for="item in items"
				:key="item"
				class="item"
			>
				<span> {{ item[this.nameProperty] }} </span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.footer-column-container {
		width: 100%;
		.title {
			padding-bottom: 20px;
			border-bottom: 1px solid var(--white);
			cursor: pointer;
		}
		.items-container {
			.item {
				margin-top: 10px;
				cursor: pointer;
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.footer-column-container {
		width: 100%;
		.title {
			margin-top: 30px;
			padding-bottom: 20px;
			border-bottom: 1px solid var(--white);
			cursor: pointer;
		}
		.items-container {
			.item {
				margin-top: 10px;
				cursor: pointer;
			}
		}
	}
}

</style>