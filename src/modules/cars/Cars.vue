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
		},
		notResultFilters() {
			return this.$t('CARS_SECTION.NOT_RESULT_FILTERS');
		},
		yourCarLegend() {
			return this.$t('CARS_SECTION.YOUR_CAR_LEGEND');
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
					{{ yourCarLegend }}
				</p>
			</div>
		</div>
		<div class="filters-container">
			<div class="filters">
				<FilterSelect
					:value="defaultMarksValue"
					:records="marks"
					:placeholder="marksPlaceholder"
					@selected-items="selectedMarks"
					ref="filteredSelectMarks"
				/>

				<FilterSelect
					:value="[]"
					:records="categories"
					:placeholder="categoriesPlaceholder"
					@selected-items="selectedCategories"
					ref="filteredSelectCategories"
				/>

				<Button
					label="Limpiar filtros"
					class="clear-filters-button"
					@click="clearFilters()"
				/>
			</div>
		</div>
		<div >
			<div
				v-if="filteredCars.length > 0"
				class="cars-container"
			>
				<div v-for="car in filteredCars" :key="car">
					<FeaturedCarsItem :car="car" class="car-item"/>
				</div>
			</div>
			<div v-else>
				{{ notResultFilters }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
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
		justify-content: space-around;
		.filters {
			width: 60%;
			display: flex;
			justify-content: space-around;
		}
		.clear-filters-button {
			width: 400px;
		}
	}
	.cars-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0 30px;
		.car-item {
			margin: 10px 5px;
		}
	}
}
</style>