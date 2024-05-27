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

		<div class="description-container">
			<h3>
				{{ $t('ABOUT_US.LALO_AUTOMOTORES') }}
			</h3>

			<p>
				{{ $t('ABOUT_US.DESCRIPTION') }}
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
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
		.description-container {
			padding: 20px;
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.about-us-main-container {
		.title-container {
			padding: 20px;
		}
		.img-container {
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 100%;
			}
		}
		.description-container {
			padding: 20px;
			p {
				font-size: 12px;
			}
		}
	}
}

</style>