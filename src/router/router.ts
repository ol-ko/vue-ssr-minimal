import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export function createRouter() {
	return new Router({
		mode: 'history',
        // scrollBehavior: () => ({ y: 0 }),
		routes: [
			{ path: '/', component: () => import('../pages/Home.vue') },
			{ path: '/item/:id', component: () => import('../pages/Item.vue') },
		]
	});
};
