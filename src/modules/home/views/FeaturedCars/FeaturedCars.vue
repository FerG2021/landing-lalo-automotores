<script>
import { mapGetters } from 'vuex';

import FeaturedCarsItem from './FeaturedCarsItem.vue';

export default {
	components: { FeaturedCarsItem },
	computed: {
		...mapGetters('CarsStore', ['cars']),
		featuredCars() {
			return this.cars.filter(element => !element.buyer_id && element.featured === 1).slice(0, 3);
		}
	},
	methods: {
		clickShowAllCars() {
			this.$router.push('/cars');
		}
	}
};
</script>

<template>
	<div class="popular-cars-main-container">
		<div class="popular-cars-container">
			<h4 class="subtitle">
				{{ $t("FEATURED_CARS.SUBTITLE") }}
			</h4>
			<h2 class="title">
				{{ $t("FEATURED_CARS.TITLE") }}
			</h2>
		</div>

		<div class="featured-cars-container">
			<div
				v-for="car in featuredCars"
				:key="car"
			>
				<FeaturedCarsItem  :car="car" class="featured-cars"/>
			</div>
		</div>

		<div class="more-cars-button-container">
			<button class="show-all-button" @click="clickShowAllCars()">
				{{ $t('FEATURED_CARS.SHOW_ALL_CARS') }}
				<i class="pi pi-arrow-right" style="font-size: 1rem"></i>
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.popular-cars-main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
		.popular-cars-container {
			.subtitle {
				text-align: center;
				color: var(--grey);
			}
			.title {
				text-align: center;
			}
		}
		.featured-cars-container {
			display: flex;
			justify-content: space-around;
			width: 100%;
			margin: 20px;
			.featured-cars {
				margin: 0 10px;
				flex: 1 0 25%;
			}
		}
		.more-cars-button-container {
			margin: 20px;
			.show-all-button {
				padding: 15px;
				display: flex;
				align-items: center;
				border-radius: 20px;
				border: 1px solid var(--grey);
				cursor: pointer;
				transition: transform 0.3s ease;
				background-color: var(--white);
				&:hover {
					transform: scale(1.1);
				}
				i {
					margin-left: 10px;
				}
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.popular-cars-main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.popular-cars-container {
			margin-top: 20px;
			.subtitle {
				text-align: center;
				color: var(--grey);
			}
			.title {
				text-align: center;
			}
		}
		.featured-cars-container {
			display: flex;
			justify-content: space-around;
			width: 100%;
			margin: 20px;
			flex-wrap: wrap;
			.featured-cars {
				margin-top: 20px;
			}
		}
		.more-cars-button-container {
			margin: 20px;
			.show-all-button {
				padding: 15px;
				display: flex;
				align-items: center;
				border-radius: 20px;
				border: 1px solid var(--grey);
				cursor: pointer;
				transition: transform 0.3s ease;
				background-color: var(--white);
				&:hover {
					transform: scale(1.1);
				}
				i {
					margin-left: 10px;
				}
			}
		}
	}
}

</style>