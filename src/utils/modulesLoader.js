export default function loadModules(router) {
	const modules = [{
		name: 'home',
		componentName: 'Home',
		title: 'Home',
		path: '/',
		icon: 'home',
		store: false,
		showInHome: false,
		menuItem: true
	},
	{
		name: 'cars',
		componentName: 'Cars',
		title: 'Vehículos',
		path: '/cars',
		icon: 'directions_car',
		store: true,
		showInHome: true,
		menuItem: true
		// loadedMethod: carsAgencyApi.getAllCars
	}];

	modules.forEach(module => {
		router.addRoute({
			path: `${module.path}`,
			component: () => import(`../modules/${module.name}/${module.componentName}.vue`)
		});

		// if (module.loadedMethod) {
		// 	module.loadedMethod(Store.getters['UsersStore/user'].account_id);
		// }

		// Store.commit('UsersStore/setModules', processModules);
		// Store.commit('UsersStore/loaded');
		router.push('/');
	});
}