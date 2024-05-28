export default {
	namespaced: true,
	state: {
		loaded: false,
		marks: null
	},
	getters: {
		loaded(state) {
			return state.loaded;
		},
		marks(state) {
			return state.marks;
		}
	},
	mutations: {
		setLoaded(state) {
			state.loaded = true;
		},
		setMarks(state, marks) {
			state.marks = marks;
		}
	},
	actions: {}
};