<script>
import TitleSubtitle from '../../components/TitleSubtitle.vue';

import AboutUs from './images/about-us.svg';

export default {
	components: { TitleSubtitle },
	data() {
		return { AboutUs: AboutUs };
	},
	computed: {
		title() {
			return this.$t('ABOUT_US.TITLE');
		}
	}
};
</script>

<template>
	<div class="about-us-main-container">
		<div class="title-container">
			<TitleSubtitle
				:title="title"
				class="title-subtitle"
			/>
		</div>

		<div class="img-container">
			<img :src="AboutUs">
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about-us-main-container {
	.title-container {
		padding: 20px;
	}
	.img-container {
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>