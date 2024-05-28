import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	// routes: []
	routes: [{
		path: '/car-detail/:id',
		component: () => import('../../modules/cars/CarDetail.vue')
	}],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	}
});

export default router;