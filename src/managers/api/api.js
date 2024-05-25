import axios from 'axios';

import Store from '../store/store';

export const getAllMarks = async () => {
	await axios.get(`/api/landing/marks/lalo`)
		.then((response) => {
			Store.commit('MarksStore/setMarks', response.data.data);
			Store.commit('UsersStore/loaded');
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getAllCars = async () => {
	await axios.get(`/api/landing/cars/lalo`)
		.then((response) => {
			Store.commit('CarsStore/setCars', response.data.data);
			Store.commit('UsersStore/loaded');
		})
		.catch((error) => {
			console.log(error);
		});
};

export const getAllCategories = async () => {
	await axios.get(`/api/landing/categories/lalo`)
		.then((response) => {
			Store.commit('CategoriesStore/setCategories', response.data.data);
			Store.commit('UsersStore/loaded');
		})
		.catch((error) => {
			console.log(error);
		});
};
