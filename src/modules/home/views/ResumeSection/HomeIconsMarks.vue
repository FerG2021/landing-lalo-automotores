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
	mounted() {
		this.verifyWidth();
		window.addEventListener('resize', this.verifyWidth);
	},
	methods: {
		verifyWidth() {
			var miDiv = document.getElementById("mainContainer");
			var contenidoAncho = miDiv.scrollWidth;
			var pantallaAncho = window.innerWidth;

			if (contenidoAncho > pantallaAncho) {
				miDiv.classList.remove('desktop-marks');
				miDiv.classList.add('mobile-marks');
			} else {
				miDiv.classList.remove('mobile-marks');
				miDiv.classList.add('desktop-marks');
			}
		},
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
	<div
		class="main-container"
		ref="mainContainer"
		id="mainContainer"
	>
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
	overflow-x: auto;
	.marks-container {
		display: flex;
		.mark-item {
			// border: 1px solid red;
			// border-radius: 12px;
			height: 80px;
			width: 120px;
			padding: 5px;
			margin: 0 30px 0 30px;
			// -webkit-box-shadow: var(--box-shadow);
			// -moz-box-shadow: var(--box-shadow);
			// box-shadow: var(--box-shadow);
			transition: transform 0.3s ease;
			// background-color: var(--white);
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
	.centeredContent {
		align-items: center;
	}
	.marks-container {
		display: flex;
		.mark-item {
			// border-radius: 8px;
			height: 60px;
			width: 80px;
			padding: 5px;
			// margin: 0 30px 0 30px;
			// -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
			// -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
			// box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
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