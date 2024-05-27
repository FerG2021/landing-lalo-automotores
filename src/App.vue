<script>
import { mapGetters } from 'vuex';

import MainFooter from './components/footer/MainFooter.vue';
import MainHeader from './components/header/MainHeader.vue';
import WhatsAppButtonContact from './components/WhatsAppButtonContact.vue';

export default {
	components: {
		MainHeader,
		MainFooter,
		WhatsAppButtonContact
	},
	computed: {
		...mapGetters('CarsStore', ['cars']),
		...mapGetters('MarksStore', ['marks']),
		...mapGetters('UsersStore', ['loaded', 'loading']),
		isLoaded() {
			return this.loaded && !this.loading;
		}
	}
};
</script>

<template>
	<div class="main-container">
		<div
			v-if="isLoaded"
			class="info-container"
		>
			<MainHeader />
			<WhatsAppButtonContact/>
			<router-view></router-view>
			<MainFooter />
		</div>
		<div
			v-else
			class="loading-container"
		>
			<ProgressSpinner />
		</div>
	</div>
</template>

<style lang="scss">
@import url('./assets/colors.css');

* {
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}

body {
	margin: 0px;
}
</style>

<style lang="scss" scoped>
	.main-container {
		.loading-container {
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
