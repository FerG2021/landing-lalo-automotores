import * as api from '../managers/api/api';
import Store from '../managers/store/store';

const MODULES = [
	{
		name: 'home',
		componentName: 'Home',
		title: 'Home',
		path: '/',
		icon: 'home',
		store: false,
		showInHeader: false,
		menuItem: true
	},
	{
		name: 'marks',
		componentName: 'Marks',
		title: 'Marcas',
		path: false,
		icon: 'directions_car',
		store: true,
		showInHeader: false,
		menuItem: false,
		loadedMethod: api.getAllMarks
	},
	{
		name: 'cars',
		componentName: 'Cars',
		title: 'Vehículos',
		path: '/cars',
		icon: 'directions_car',
		store: true,
		showInHeader: true,
		menuItem: true,
		loadedMethod: api.getAllCars
	},
	{
		name: 'categories',
		componentName: 'Categories',
		title: 'Categorías',
		path: false,
		icon: 'directions_car',
		store: true,
		showInHeader: false,
		menuItem: false,
		loadedMethod: api.getAllCategories
	},
	{
		name: 'aboutus',
		componentName: 'AboutUs',
		title: 'Quiénes somos',
		path: '/who-us',
		icon: 'directions_car',
		store: false,
		showInHeader: true,
		menuItem: true
	},
	{
		name: 'contact',
		componentName: 'Contact',
		title: 'Contacto',
		path: '/contact',
		icon: 'directions_car',
		store: false,
		showInHeader: true,
		menuItem: true
	}
];

export default function loadModules(router) {
	MODULES.forEach(module => {
		if (module.path) {
			router.addRoute({
				path: `${module.path}`,
				component: () => import(`../modules/${module.name}/${module.componentName}.vue`)
			});
		}

		if (module.loadedMethod) {
			Store.commit('UsersStore/loading');
			module.loadedMethod();
		}
	});

	Store.commit('UsersStore/setModules', MODULES);
	router.push('/');
}