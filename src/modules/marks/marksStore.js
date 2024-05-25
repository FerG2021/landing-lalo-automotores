export default {
	namespaced: true,
	state: { marks: null	},
	getters: {
		marks(state) {
			return state.marks;
		}
	},
	mutations: {
		setMarks(state, marks) {
			state.marks = marks;
		}
	},
	actions: {}
};