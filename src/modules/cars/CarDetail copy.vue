<script>
import { mapGetters } from 'vuex';

import ButtonIconLegend from '../../components/ButtonIconLegend.vue';
import IconLabelValueItem from '../../components/IconLabelValueItem.vue';
import ImagesMultiple from '../../components/ImagesMultiple.vue';
import Store from '../../managers/store/store';

import Configuration from './cars.configuration';

export default {
	components: {
		ButtonIconLegend,
		ImagesMultiple,
		IconLabelValueItem
	},
	computed: {
		...mapGetters('CarsStore', ['itemsDetail']),
		backIcon() {
			return 'pi pi-angle-left';
		},
		backLabel() {
			return this.$t('BACK');
		},
		configuration() {
			return Configuration;
		},
		carDescription() {
			console.log('this.car.description');
			console.log(this.car.description);

			let description;

			if (this.car.description) {
				description = this.car.description;
			} else {
				description = this.$t('CARS_SECTION.WITH_OUT_DESCRIPTION');
			}

			return description;
		}
	},
	data() {
		return { car: null };
	},
	mounted() {
		this.getCarDetail();
	},
	methods: {
		goToBack() {
			this.$router.go(-1);
		},
		getCarDetail() {
			Store.dispatch('CarsStore/getCarById', this.$route.params.id).then(response => this.car = response);
		},
		getLabel(item) {
			console.log('item');
			console.log(item);

			return `${item.label}: `;
		}
	}
};
</script>

<template>
	<div class="detail-car-main-container">
		<div class="go-back-button-container">
			<ButtonIconLegend
				class="back-button"
				:icon="backIcon"
				:label="backLabel"
				@click="goToBack()"
			/>
		</div>
		<div
			v-if="car"
			class="car-detail-container"
		>
			<div class="image-info-container">
				<div class="images-container">
					<ImagesMultiple
						:images="car.image"
						class="images-multiple"
					/>
				</div>
				<div class="info-container">
					<template
						v-for="item in configuration.itemsDetail"
						:key="item"
					>
						<IconLabelValueItem
							:icon="item.icon"
							:label="getLabel(item)"
							:value="car[item.value]"
						/>
					</template>
				</div>
			</div>
			<div class="description-container">
				{{ carDescription }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.detail-car-main-container {
	min-height: 100vh;
	padding: 20px;
	.go-back-button-container {
		.back-button {
			border: none;
			cursor: pointer;
			background-color: var(--white);
			font-size: 18px;
		}
	}
	.car-detail-container {
		padding: 20px;
		display: flex;
		flex-direction: column;
		min-height: 88vh;
		border: 1px solid blue;
		.image-info-container {
			display: flex;
			.images-container {
				border: 1px solid green;
				width: 50%;
				.images-multiple {
					border: 1px solid red;
				}
			}
			.info-container {
				border: 1px solid red;
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
			}
		}
		.description-container {
			padding: 20px;
		}
	}
}
</style>