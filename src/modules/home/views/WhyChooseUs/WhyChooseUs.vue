<script>
import Cars from '../../images/autos.png';

import WhyChooseItem from './WhyChooseItem.vue';

export default {
	components: { WhyChooseItem },
	data() {
		return {
			Cars: Cars,
			descriptionItems: [
				{
					title: this.$t('WHY_CHOOSE_US.BEST_PRICE.TITLE'),
					description: this.$t('WHY_CHOOSE_US.BEST_PRICE.SUBTITLE'),
					icon: 'pi pi-dollar'
				},
				{
					title: this.$t('WHY_CHOOSE_US.ATTENTION.TITLE'),
					description: this.$t('WHY_CHOOSE_US.ATTENTION.SUBTITLE'),
					icon: 'pi pi-user'
				},
				{
					title: this.$t('WHY_CHOOSE_US.MARKS.TITLE'),
					description: this.$t('WHY_CHOOSE_US.MARKS.SUBTITLE'),
					icon: 'pi pi-star-fill'
				}
			]
		};
	}
};
</script>

<template>
	<div class="why-choose-main-container">
		<div class="section-image-container">
			<img :src="Cars">
		</div>
		<div class="section-description-container">
			<div class="titles-container">
				<h3 class="subtitle">
					{{ $t('WHY_CHOOSE_US.SUBTITLE') }}
				</h3>
				<h2 class="title">
					{{ $t('WHY_CHOOSE_US.TITLE') }}
				</h2>
			</div>

			<div
				class="item-container"
			>
				<div
					v-for="item in descriptionItems"
					:key="item"
				>
					<WhyChooseItem :item="item" class="description-item"/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.why-choose-main-container {
		display: flex;
		.section-image-container {
			width: 50%;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		.section-description-container {
			width: 50%;
			padding: 20px;
			.titles-container {
				text-align: center;
				.subtitle {
					color: var(--grey);
				}
			}
			.item-container {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
			}

		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.why-choose-main-container {
		display: flex;
		flex-direction: column;
		min-height: 50vh;
		.section-image-container {
			width: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		.section-description-container {
			width: 100%;
			padding: 20px;
			.titles-container {
				text-align: center;
				.subtitle {
					color: var(--grey);
				}
			}
			.item-container {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.description-item {
					margin-top: 10px;
				}
			}

		}
	}
}

</style>