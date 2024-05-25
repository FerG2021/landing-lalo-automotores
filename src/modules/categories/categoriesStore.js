export default {
	namespaced: true,
	state: { categories: null	},
	getters: {
		categories(state) {
			return state.categories;
		}
	},
	mutations: {
		setCategories(state, categories) {
			state.categories = categories;
		}
	},
	actions: {}
};