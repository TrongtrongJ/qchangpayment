import { createRouter as createClientRouter, createWebHistory } from 'vue-router';
import * as NProgress from 'nprogress';

import routes from 'pages-generated';

export function createRouter() {
	const router = createClientRouter({
		history: createWebHistory(),
		routes
	});

	/**
   * Handle NProgress display on page changes
   */
	router.beforeEach(() => {
		NProgress.start();
	});
	router.afterEach(() => {
		NProgress.done();
	});

	return router;
}
