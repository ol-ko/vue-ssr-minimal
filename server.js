const createApp = require('./dist/server/vue-ssr-server-bundle.json');
const server = require('express')();
const { createBundleRenderer } = require('vue-server-renderer');
const fs = require('fs');
const clientManifest = require('./dist/client/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(
	createApp,
	{
		runInNewContext: false,
		template: fs.readFileSync('./index.template.html', 'utf-8'),
		clientManifest
	}
);

server.get('*', (request, response) => {
	const context = {
		url: request.url,
        title: 'Vue SSR',
        meta: `
			<meta name="viewport" content="width=device-width, initial-scale=1">
		`
	};

	renderer.renderToString(context, (err, html) => {
		if (err) {
			response.end(`${err.statusCode}: ${err.message}
			${err.stack}`);
			// if (err.code === 404) {
			// 	response.status(404).end('Page not found');
			// } else {
			// 	response.status(500).end('Internal Server Error');
			// }
		} else {
            response.end(html);
		}
	})
});

server.listen(8080);
