import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createRouter } from './router';
import App from './App.vue';
import 'nprogress/nprogress.css';
import './scss/main.scss';

const app = createApp(App);

const router = createRouter();

const head = createHead();

app.use(router);

app.use(head);

app.mount('#app');
