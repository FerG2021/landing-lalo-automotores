import { createStore } from 'vuex';

import carsStore from '../../modules/cars/carsStore';

export default createStore({
	modules: {
		CarsStore: carsStore
	}
});