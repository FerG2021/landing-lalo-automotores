<script>
import { mapGetters } from 'vuex';

import LaloLogo from '../../assets/lalo-automotores-logo.png';

import ContactHeader from './ContactHeader.vue';
import HeaderItem from './HeaderItem.vue';
import SidebarHeader from './SidebarHeader.vue';

export default {
	components: {
		HeaderItem,
		ContactHeader,
		SidebarHeader
	},
	data() {
		return { LaloLogo: LaloLogo };
	},
	computed: {
		...mapGetters('UsersStore', ['modules', 'contact']),
		headerItems() {
			return this.modules.filter(element => element.showInHeader);
		}
	},
	methods: {
		clickLogo() {
			this.$router.push('/');
		},
		clickOpenSideBar() {
			this.$refs.sidebarheader.openSideBar();
		},
		clickContact() {
			this.$router.push('/contact');
		}

	}
};
</script>

<template>
	<div class="container">
		<div class="logo-container">
			<img
				:src="LaloLogo"
				@click="clickLogo()"
			>
		</div>
		<div class="sections-container">
			<div
				v-for="item in headerItems"
				:key="item"
				class="section-item"
			>
				<HeaderItem :item="item" class="header-item"/>
			</div>
		</div>
		<div class="contact-container">
			<span
				v-for="item in contact"
				:key="item"
			>
				<ContactHeader
					:item="item"
					class="contact-item"
					:class="item.title"
				/>
			</span>
			<span
				class="contact-legend"
				@click="clickContact()"
			>
				{{ $t('HEADER.CONTACT') }}
			</span>

			<button
				@click="clickOpenSideBar()"
				class="open-sidebar-button"
			>
				<i class="pi pi-align-justify"></i>
			</button>
		</div>
	</div>

	<SidebarHeader ref="sidebarheader"/>
</template>

<style lang="scss" scoped>
/* DESKTOP*/
@media only screen and (min-width: 801px) {
.container{
	height: 7vh;
	padding: 5px;
	display: flex;
	justify-content: space-between;
	.logo-container {
		img {
			height: 100%;
			cursor: pointer;
		}
	}
	.sections-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.contact-container {
		display: flex;
		align-items: center;
		justify-content: center;
		.contact-item {
			margin-right: 10px;
			cursor: pointer;
			transition: transform 0.3s ease;
			&:hover {
				transform: scale(1.2);
			}
		}
		.Facebook {
			&:hover {
				color: var(--facebook);
			}
		}
		.Instagram {
			&:hover {
				color:  var(--instagram);
			}
		}
		.WhatsApp {
			&:hover {
				color:  var(--whatsapp);
				transform: scale(1.2);
			}
		}
		.contact-legend {
			padding: 0 10px 0 10px;
			cursor: pointer;
		}
		.open-sidebar-button {
			display: none;
		}
	}
}
}

/* MOBILE */
@media only screen and (max-width: 800px) {
.container{
	height: 7vh;
	padding: 5px;
	display: flex;
	justify-content: space-between;
	.logo-container {
		img {
			height: 6vh;
			cursor: pointer;
		}
	}
	.sections-container {
		display: none;
	}
	.contact-container {
		display: flex;
		align-items: center;
		justify-content: center;
		.contact-item {
			display: none;
		}
		.contact-legend {
			display: none;
		}
		.open-sidebar-button {
			display: flex;
			margin-right: 12px;
			background-color: var(--white);
			color: var(--grey);
			border: none;
			i {
				font-size: 20px;
			}
		}
	}
}
}

</style>