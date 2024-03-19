import axios from 'axios';

export const getAllCars = async (id) => {
	await axios.get(`/api/cars/${id}`)
		.then((response) => { console.log(response); })
		.catch((error) => {
			console.log(error);
		});
};
