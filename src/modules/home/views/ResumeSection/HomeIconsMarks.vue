<script>
import { mapGetters } from 'vuex';

import Store from '../../../../managers/store/store';

export default {
	computed: {
		...mapGetters('MarksStore', ['marks']),
		isScrollXHidden() {
			if (this.$refs.mainContainer) {
				return this.$refs.mainContainer.scrollWidth <= this.$refs.mainContainer.clientWidth;
			}

			return false;
		}
	},
	methods: {
		clickMark(mark) {
			Store.commit('CarsStore/filteredCarsByAttributeAndValue', {
				attribute: 'mark_id',
				value: [mark.id]
			});
			Store.commit('CarsStore/setFilterMarks', [mark]);
			this.$router.push('/cars');
		}
	}
};
</script>

<template>
	<div class="main-container">
		<div
			v-for="mark in marks"
			:key="mark"
			class="marks-container"
		>
			<img
				:src="mark.image"
				class="mark-item"
				@click="clickMark(mark)"
			>
		</div>
	</div>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
.desktop-marks {
	align-items: center;
	justify-content: center;
}
.mobile-marks {
	align-items: center;
}
.main-container {
	margin-top: 20px;
	padding: 20px;
	display: flex;
	justify-content: center;
	overflow-x: auto;
	.marks-container {
		display: flex;
		margin: 0 20px;
		.mark-item {
			height: 80px;
			width: 120px;
			padding: 5px;
			margin: 0 30px 0 30px;
			transition: transform 0.3s ease;
			cursor: pointer;
			&:hover {
				transform: scale(1.1);
			}
		}
	}
}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
.main-container {
	margin-top: 10px;
	display: flex;
	overflow-x: auto;
	height: 100px;
	align-items: center;
	.marks-container {
		display: flex;
		justify-content: center;
		margin: 0 20px;
		.mark-item {
			height: 60px;
			width: 80px;
			padding: 5px;
		}
	}
}
}

/* Barra de desplazamiento */
::-webkit-scrollbar {
    width: 10px; /* Ancho de la barra de desplazamiento */
	height: 6px;
}

/* Pista de la barra de desplazamiento */
::-webkit-scrollbar-track {
    background: #f1f1f1; /* Color de fondo */
}

/* Tumbilla (manija) de la barra de desplazamiento */
::-webkit-scrollbar-thumb {
    background: #888; /* Color de la manija */
}

/* Cambiar la apariencia de la tumbilla al pasar el mouse */
::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color de la manija al pasar el mouse */
}
</style>