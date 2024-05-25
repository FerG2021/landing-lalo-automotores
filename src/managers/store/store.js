import { createStore } from 'vuex';

import carsStore from '../../modules/cars/carsStore';
import categoriesStore from '../../modules/categories/categoriesStore';
import marksStore from '../../modules/marks/marksStore';
import usersStore from '../../modules/users/userStore';

export default createStore(
	{
		modules: {
			CarsStore: carsStore,
			MarksStore: marksStore,
			UsersStore: usersStore,
			CategoriesStore: categoriesStore
		}
	});