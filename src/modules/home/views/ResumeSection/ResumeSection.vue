<script>
import HomeIconsMarks from './HomeIconsMarks.vue';
import ItemTopic from './ItemTopic.vue';

export default {
	components: {
		HomeIconsMarks,
		ItemTopic
	},
	computed: {
		itemTopic1() {
			return {
				icon: 'pi pi-map-marker',
				color: 'secondary',
				title: this.$t("RESUME_SECTION.TOPIC1.TITLE"),
				subtitle: this.$t("RESUME_SECTION.TOPIC1.SUBTITLE")
			};
		},
		itemTopic2() {
			return {
				icon: 'pi pi-calendar',
				color: 'primary',
				title: this.$t("RESUME_SECTION.TOPIC2.TITLE"),
				subtitle: this.$t("RESUME_SECTION.TOPIC2.SUBTITLE")
			};
		},
		itemTopic3() {
			return {
				icon: 'pi pi-car',
				color: 'secondary',
				title: this.$t("RESUME_SECTION.TOPIC3.TITLE"),
				subtitle: this.$t("RESUME_SECTION.TOPIC3.SUBTITLE")
			};
		}
	}
};
</script>

<template>
	<div class="main-section-container">
		<HomeIconsMarks />
		<div class="item-topic-section">
			<ItemTopic :record="itemTopic1"/>
			<ItemTopic :record="itemTopic2"/>
			<ItemTopic :record="itemTopic3"/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
.main-section-container {
	background-color: var(--light-blue);
	.item-topic-section {
		padding: 20px;
		display: flex;
		justify-content: space-around;
	}
}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
.main-section-container {
	background-color: var(--light-blue);
	.item-topic-section {
		padding: 20px 0;
		margin-top: 40px;
	}
}
}

</style>