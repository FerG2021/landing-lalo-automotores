<script>
import { mapGetters } from 'vuex';

import ContactHeader from './ContactHeader.vue';
import HeaderItem from './HeaderItem.vue';

export default {
	components: {
		HeaderItem,
		ContactHeader
	},
	data() {
		return { visibleRight: false };
	},
	computed: { ...mapGetters('UsersStore', ['modules', 'contact']) },
	methods: {
		openSideBar() {
			this.visibleRight = !this.visibleRight;
		}
	}
};
</script>

<template>
	<Sidebar
		v-model:visible="visibleRight"
		header=" "
		position="right"
	>
		<div class="main-container">
			<div class="sections-container">
				<div
					v-for="item in modules"
					:key="item"
				>
					<HeaderItem :item="item" />
				</div>
			</div>
			<div class="contact-container">
				<div
					v-for="item in contact"
					:key="item"
				>
					<ContactHeader :item="item"/>
				</div>
			</div>
		</div>

	</Sidebar>
</template>

<style lang="scss" scoped>
.main-container {
	height: 96vh;
	.sections-container {
		height: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 20px;
	}
	.contact-container {
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
}
</style>