import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
	return new Router({
		mode: 'history',
        fallback: false,
        base: '/dev/',
		routes: [
			{ path: '/', component: () => import('../pages/index.vue') },
			{ path: '/location', component: () => import('../pages/Location.vue') },
		]
	});
};
