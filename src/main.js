import axios from 'axios';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import PrimeVue from 'primevue/config';
import FloatLabel from 'primevue/floatlabel';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import ProgressSpinner from 'primevue/progressspinner';
import Sidebar from 'primevue/sidebar';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import VueAxios from 'vue-axios';

import './style.css';

import loadModules from '../src/utils/modulesLoader';

import App from './App.vue';
import primevueConfig from './config/primevue';
import router from './managers/router/Router';
import store from './managers/store/store';
import { i18n } from './plugins/i18n';

// usado para login
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

import 'primevue/resources/themes/lara-light-amber/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css';

loadModules(router);

createApp(App)
	.use(store)
	.use(router)
	.use(i18n)
	.use(VueAxios, axios)
	.component('Button', Button)
	.component('ProgressSpinner', ProgressSpinner)
	.component('Sidebar', Sidebar)
	.component('Carousel', Carousel)
	.component('MultiSelect', MultiSelect)
	.component('Image', Image)
	.component('Galleria', Galleria)
	.component('InputText', InputText)
	.component('FloatLabel', FloatLabel)
	.component('InputNumber', InputNumber)
	.component('Textarea', Textarea)
	.component('Checkbox', Checkbox)
	.component('Toast', Toast)
	.use(ToastService)
	.use(PrimeVue, primevueConfig)
	.mount('#app');
