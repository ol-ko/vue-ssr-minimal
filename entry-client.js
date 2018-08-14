import { createApp } from './app';

const { app, router, store } = createApp();

router.onReady(() => {
	if (window.__INITIAL_STATE__) {
		store.replaceState(window.__INITIAL_STATE__);
	}

	app.mixin({
		// fetch data needed for the route on route entry
		beforeMount() {
			const { asyncData } = this.$options;
			if (asyncData) {
				this.dataPromise = asyncData({
					store: this.$store,
					route: this.$route
				});
			}
		},
		// fetch data needed for the route on route update (e.g. param change)
		beforeRouteUpdate(to, from, next) {
			const { asyncData } = this.$options;
			if (asyncData) {
				asyncData({
					store: this.$store,
					route: to
				})
					.then(next)
					.catch(next);
			} else {
				next();
			}
		}
	});

	app.$mount('#app');
});

// TODO: store code splitting for modules
