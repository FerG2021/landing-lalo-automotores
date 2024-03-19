import axios from 'axios';
import Button from 'primevue/button';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';

import './style.css';

import loadModules from '../src/utils/modulesLoader';

import App from './App.vue';
import router from './managers/router/Router';
import store from './managers/store/store';
import { i18n } from './plugins/i18n';

// usado para login
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

import 'primevue/resources/themes/lara-light-amber/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css

loadModules(router);

createApp(App)
	.use(store)
	.use(router)
	.use(i18n)
	.use(VueAxios, axios)
	.component('Button', Button)
	.mount('#app');
