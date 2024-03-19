import Button from 'primevue/button';
import { createApp } from 'vue';

import './style.css';

import loadModules from '../src/utils/modulesLoader';

import App from './App.vue';
import router from './managers/router/Router';
import store from './managers/store/store';
import { i18n } from './plugins/i18n';

import 'primevue/resources/themes/lara-light-amber/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css

loadModules(router);

createApp(App)
	.use(store)
	.use(router)
	.use(i18n)
	.component('Button', Button)
	.mount('#app');
