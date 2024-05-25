import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	// routes: []
	routes: [{
		path: '/car-detail/:id',
		component: () => import('../../modules/cars/CarDetail.vue')
	}]
});

export default router;