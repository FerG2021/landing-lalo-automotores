export default {
	namespaced: true,
	state: {
		cars: null,
		filteredCars: [],
		filterCategories: [],
		filterMarks: [],
		itemsDetail: [
			'category',
			'condition',
			'fuel',
			'mark',
			'kilometres'
		]
	},
	getters: {
		cars(state) {
			return state.cars;
		},
		filteredCars(state) {
			return state.filteredCars;
		},
		filterCategories(state) {
			return state.filterCategories;
		},
		filterMarks(state) {
			return state.filterMarks;
		},
		itemsDetail(state) {
			return state.itemsDetail;
		}
	},
	mutations: {
		setCars(state, cars) {
			state.cars = cars;
			state.filteredCars = cars;
		},
		filteredCarsByAttributeAndValue(state, { attribute, value }) {
			if (state.filteredCars.length > 0) {
				state.filteredCars = state.filteredCars.filter(car => value.includes(car[attribute]));
			} else {
				state.filteredCars = state.cars.filter(car => value.includes(car[attribute]));
			}
		},
		resetFilteredCars(state) {
			state.filteredCars = state.cars;
		},
		setFilterCategories(state, categories) {
			state.filterCategories = categories;
		},
		setFilterMarks(state, marks) {
			state.filterMarks = marks;
		}
	},
	actions: {
		getCarById({ state }, id) {
			return state.cars.find(element => element.id === parseInt(id));
		}
	}
};