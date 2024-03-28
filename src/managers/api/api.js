import axios from 'axios';

import Store from '../store/store';

export const getAllCars = async () => {
	await axios.get(`/api/landing/marks/lalo`)
		.then((response) => {
			console.log(response);
			Store.commit('CarsStore/setCars', response.data.data);
		})
		.catch((error) => {
			console.log(error);
		});
};
