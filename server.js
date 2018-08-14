const createApp = require('path-to-server-bundle');

server.get('*', (request, response) => {
	const context = { url: request.url };

	createApp(context)
		.then(app => {
			renderer.renderToString(app, (err, html) => {
				if (err) {
					if (err.code === 404) {
						response.status(404).end('Page not found');
					} else {
						response.status(500).end('Internal Server Error');
					}
				} else {
					res.end(html);
				}
			})
		})
});