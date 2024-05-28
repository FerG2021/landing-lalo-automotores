export default {
	namespaced: true,
	state: {
		loaded: false,
		loading: false,
		modules: null,
		contact: [
			{
				icon: 'pi pi-facebook',
				title: 'Facebook',
				url: 'https://www.facebook.com/'
			},
			{
				icon: 'pi pi-instagram',
				title: 'Instagram',
				url: 'https://www.instagram.com/'
			},
			{
				icon: 'pi pi-whatsapp',
				title: 'WhatsApp',
				url: 'https://www.whatsapp.com/?lang=es_LA'
			}
		]
	},
	getters: {
		loaded(state) {
			return state.loaded;
		},
		loading(state) {
			return state.loading;
		},
		modules(state) {
			return state.modules;
		},
		contact(state) {
			return state.contact;
		}
	},
	mutations: {
		loading(state) {
			state.loaded = false;
			state.loading = true;
		},
		loaded(state) {
			state.loaded = true;
			state.loading = false;
		},
		setModules(state, modules) {
			state.modules = modules;
		}
	},
	actions: {}
};