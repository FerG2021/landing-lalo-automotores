export default {
	namespaced: true,
	state: { cars: null	},
	getters: {
		cars(state) {
			return state.cars;
		}
	},
	mutations: {
		setCars(state, cars) {
			state.cars = cars;
		}
	},
	actions: {}
};