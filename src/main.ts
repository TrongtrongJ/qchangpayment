import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createRouter } from './router';
import App from './App.vue';
import 'nprogress/nprogress.css';
import './scss/main.scss';

type VueAppContext = Awaited<ReturnType<typeof createApp>>;
export type VueAppPlugin = (vue: VueAppContext) => void | Promise<void>;

export function definePlugin(plugin: VueAppPlugin) {
	return plugin;
}

const app = createApp(App);

const router = createRouter();

const head = createHead();

app.use(router);

app.use(head);

app.mount('#app');
