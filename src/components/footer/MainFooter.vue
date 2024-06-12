<script>
import { mapGetters } from 'vuex';

import FooterColumn from './FooterColumn.vue';

export default {
	name: 'FooterComponent',
	components: { FooterColumn },
	computed: {
		...mapGetters('CategoriesStore', ['categories']),
		...mapGetters('UsersStore', ['modules']),
		carsTitle() {
			return this.$t('FOOTER.CARS_TITLE');
		},
		carsItems() {
			const finalItem = {
				name: 'Ver todos los vehículos',
				final: true
			};

			return {
				...this.categories,
				finalItem
			};
		},
		sectionsTitle() {
			return this.$t('FOOTER.SECTIONS_TITLE');
		},
		sectionsItems() {
			const sections = [];

			for (const item of this.modules) {
				if (item.showInHeader) {
					sections.push(item);
				}
			}

			return sections;
		}

	}
};
</script>

<template>
	<div class="main-footer-container">
		<div class="columns-container">
			<FooterColumn
				:title="carsTitle"
				:items="carsItems"
				:nameProperty="'name'"

			/>
			<FooterColumn
				:title="sectionsTitle"
				:items="sectionsItems"
				:nameProperty="'title'"
			/>
			<FooterColumn :title="carsTitle" :items="carsItems"/>
			<FooterColumn :title="carsTitle" :items="carsItems"/>
		</div>

		<div class="develop-by-container">
			<span> {{ $t('FOOTER.DEVELOP_BY') }} </span>
			<a
				href="http://fssolutions.com.ar/"
				target="_blank"
			>
				{{ $t('FOOTER.FS_SOLUTIONS') }}
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
	.main-footer-container {
		background-color: var(--grey);
		color: var(--white);
		padding: 50px;
		.columns-container {
			display: flex;
			justify-content: space-around;
		}
		.develop-by-container {
			margin-top: 30px;
			display: flex;
			justify-content: center;
			span {
				margin-right: 10px;
			}
			a {
				text-decoration: none;
				color: var(--facebook);
			}
		}
	}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
	.main-footer-container {
		background-color: var(--grey);
		color: var(--white);
		padding: 20px 50px;
		.columns-container {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
		}
		.develop-by-container {
			margin-top: 30px;
			display: flex;
			justify-content: center;
			span {
				margin-right: 10px;
			}
			a {
				text-decoration: none;
				color: var(--facebook);
			}
		}
	}
}

</style>