<script>
import ButtonIconLegend from '../../../../components/ButtonIconLegend.vue';
import { formatNumberToDecimal } from '../../../../utils/utils.js';

import DescriptionItem from './DescriptionItem.vue';

export default {
	components: {
		DescriptionItem,
		ButtonIconLegend
	},
	props: {
		car: {
			type: Object,
			required: true
		}
	},
	computed: {
		fullNameCar() {
			return `${this.car.mark.name} - ${this.car.name}`;
		},
		formattedKilometres() {
			return formatNumberToDecimal(this.car.kilometres);
		},
		infoLabel() {
			return this.$t('FEATURED_CARS.VIEW_MORE');
		},
		iconContact() {
			return 'pi pi-info-circle';
		},
		infoConsult() {
			return this.$t('FEATURED_CARS.CONSULT');
		},
		iconConsult() {
			return 'pi pi-whatsapp';
		}
	},
	methods: {
		openCarDetail(car) {
			this.$router.push(`/car-detail/${car.id}`);
		}
	}
};
</script>

<template>
	<div class="item-car-main-container">
		<div class="img-container">
			<img
				:src="car.image[0]"
				class="image"
			>
		</div>
		<div class="description-container">
			<p class="car-name">
				{{ fullNameCar }}
			</p>
			<div class="description">
				<div class="column">
					<DescriptionItem
						:icon="'pi pi-tag'"
						:title="car.category.name"
						class="description-item"
					/>
					<DescriptionItem
						:icon="'pi pi-wrench'"
						:title="car.condition.name"
						class="description-item"
					/>
					<DescriptionItem
						:icon="'pi pi-flag'"
						:title="car.fuel.name"
						class="description-item"
					/>
				</div>
				<div class="column">
					<DescriptionItem
						:icon="'pi pi-compass'"
						:title="formattedKilometres"
						class="description-item"
					/>
					<DescriptionItem
						:icon="'pi pi-calendar'"
						:title="car.year"
						class="description-item"
					/>
				</div>
			</div>
		</div>
		<div class="contact-container">
			<ButtonIconLegend
				class="contact-button info"
				:icon="iconContact"
				:label="infoLabel"
				@click="openCarDetail(car)"
			/>
			<ButtonIconLegend
				class="contact-button contact"
				:icon="iconConsult"
				:label="infoConsult"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.item-car-main-container {
	border: 1px solid var(--grey);
	border-radius: 12px;
	width: 272px;
	.img-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
		.image {
			padding: 5px;
			height: 90%;
			width: 90%;
			object-fit: contain;
		}
	}
	.description-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		.car-name {
			padding: 5px;
		}
		.description {
			display: flex;
			justify-content: space-evenly;
			width: 100%;
			.column {
				justify-content: start;
				.description-item {
					margin-top: 5px;
				}
			}
		}
	}
	.contact-container {
		margin-top: 5px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.contact-button {
			cursor: pointer;
			display: flex;
			align-items: center;
			border: none;
			padding: 5px;
			margin: 5px;
			background-color: var(--white);
			i {
				margin-right: 5px;
			}
		}
		.info {
			color: var(--primary);
		}
		.contact {
			color: var(--whatsapp);
		}
	}
}
</style>