export default {
	namespaced: true,
	state: {
		loaded: false,
		categories: null
	},
	getters: {
		loaded(state) {
			return state.loaded;
		},
		categories(state) {
			return state.categories;
		}
	},
	mutations: {
		setLoaded(state) {
			state.loaded = true;
		},
		setCategories(state, categories) {
			state.categories = categories;
		}
	},
	actions: {}
};