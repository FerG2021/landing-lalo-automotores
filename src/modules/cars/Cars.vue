<script>
import { mapGetters } from 'vuex';

import FilterSelect from '../../components/FilterSelect.vue';
import TitleSubtitle from '../../components/TitleSubtitle.vue';
import Store from '../../managers/store/store';
import FeaturedCarsItem from '../home/views/FeaturedCars/FeaturedCarsItem.vue';

import usedCars from './images/usedCars.svg';

export default {
	name: 'CarsView',
	components: {
		TitleSubtitle,
		FilterSelect,
		FeaturedCarsItem
	},
	data() {
		return { usedCars: usedCars };
	},
	computed: {
		...mapGetters('MarksStore', ['marks']),
		...mapGetters('CategoriesStore', ['categories']),
		...mapGetters('CarsStore', ['filteredCars', 'filterMarks']),
		title() {
			return this.$t('CARS_SECTION.TITLE');
		},
		subtitle() {
			return this.$t('CARS_SECTION.SUBTITLE');
		},
		marksPlaceholder() {
			return this.$t('CARS_SECTION.MARKS_PLACEHOLDER');
		},
		categoriesPlaceholder() {
			return this.$t('CARS_SECTION.CATEGORIES_PLACEHOLDER');
		},
		defaultMarksValue() {
			return this.filterMarks;
		}
	},
	methods: {
		selectedMarks(data) {
			const arrayIDs = data.map(item => item.id);

			Store.commit('CarsStore/filteredCarsByAttributeAndValue', {
				attribute: 'mark_id',
				value: arrayIDs
			});

			Store.commit('CarsStore/setFilterMarks', data);
		},
		selectedCategories(data) {
			const arrayIDs = data.map(item => item.id);

			Store.commit('CarsStore/filteredCarsByAttributeAndValue', {
				attribute: 'category_id',
				value: arrayIDs
			});
		},
		clearFilters() {
			Store.commit('CarsStore/resetFilteredCars');
			this.$refs.filteredSelectMarks.resetValue();
			this.$refs.filteredSelectCategories.resetValue();
		}
	}
};
</script>

<template>
	<div class="main-cars-container">
		<div class="title-subtitle-container">
			<TitleSubtitle
				:title="title"
				:subtitle="subtitle"
				class="title-subtitle"
			/>
		</div>
		<div class="used-car-image-container">
			<img :src="usedCars" class="used-car-image">

			<div class="your-car-legend-container">
				<p class="your-car-legend">
					{{ $t('CARS_SECTION.YOUR_CAR_LEGEND') }}
				</p>
			</div>
		</div>
		<div class="filters-container">
			<div class="filters">
				<div class="filter-items">
					<FilterSelect
						:value="defaultMarksValue"
						:records="marks"
						:placeholder="marksPlaceholder"
						@selected-items="selectedMarks"
						ref="filteredSelectMarks"
						class="filter-select"
					/>

					<FilterSelect
						:value="[]"
						:records="categories"
						:placeholder="categoriesPlaceholder"
						@selected-items="selectedCategories"
						ref="filteredSelectCategories"
						class="filter-select"
					/>
				</div>

				<Button
					label="Limpiar filtros"
					class="clear-filters-button"
					@click="clearFilters()"
				/>
			</div>
		</div>
		<div class="filter-results-container">
			<div
				v-if="filteredCars.length > 0"
				class="cars-container"
			>
				<div v-for="car in filteredCars" :key="car">
					<FeaturedCarsItem :car="car" class="car-item"/>
				</div>
			</div>
			<div v-else class="not-found-results">
				<p>
					{{ $t('CARS_SECTION.NOT_RESULT_FILTERS') }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.main-cars-container {
		min-height: 100vh;
		.title-subtitle-container {
			padding: 20px;
		}
		.used-car-image-container {
			padding: 20px;
			.used-car-image {
				width: 100%;
				height: 60vh;
				object-fit: cover;
			}
		}
		.your-car-legend-container {
			padding: 20px;
			text-align: center;
			.your-car-legend {
				font-size: 24px;
				color: var(--primary);
			}
		}
		.filters-container {
			padding: 10px;
			display: flex;
			justify-content: space-around;
			.filters {
				width: 60%;
				display: flex;
				justify-content: space-around;
				.filter-items {
					display: flex;
					width: 100%;
					.filter-select {
						margin-left: 10px;
					}
				}
			}
			.clear-filters-button {
				width: 400px;
				margin-left: 10px;
			}
		}
		.filter-results-container {
			display: flex;
			justify-content: space-evenly;
			.cars-container {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				padding: 0 30px;
				.car-item {
					margin: 10px 5px;
				}
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.main-cars-container {
		min-height: 100vh;
		.title-subtitle-container {
			padding: 20px;
		}
		.used-car-image-container {
			padding: 20px;
			.used-car-image {
				width: 100%;
			}
		}
		.your-car-legend-container {
			padding: 20px;
			text-align: center;
			.your-car-legend {
				font-size: 24px;
				color: var(--primary);
			}
		}
		.filters-container {
			padding: 10px;
			display: flex;
			justify-content: center;
			.filters {
				width: 95%;
				.filter-items {
					width: 100%;
					justify-content: center;
					.filter-select {
						margin-top: 10px;
						width: 100%;
					}
				}
			}
			.clear-filters-button {
				width: 100%;
				margin-top: 10px;
			}
		}
		.filter-results-container {
			display: flex;
			justify-content: space-evenly;
			.cars-container {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				padding: 0 30px;
				.car-item {
					margin: 10px 5px;
				}
			}
			.not-found-results {
				display: flex;
				align-items: center;
				p {
					font-size: 14px;
				}
			}
		}
	}
}
</style>