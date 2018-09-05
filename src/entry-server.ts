import { createApp } from './app';

export default (context:any) => {
	return new Promise((resolve, reject) => {
        const {app, router, store} = createApp();

        router.push(context.url);

		router.onReady(() => {
			const matchedComponents = router.getMatchedComponents();

			if (!matchedComponents.length) {
				return reject({ code: 404 });
			}

			Promise.all(matchedComponents.map(Component => {
				if ((Component as any).options.methods.asyncData) {
					return (Component as any).options.methods.asyncData(store, router.currentRoute);
				}
			}))
				.then(() => {
					context.state = store.state;
					resolve(app);
				})
				.catch((err) => {
					console.log(err);
				});
		}, reject);
	});
};
