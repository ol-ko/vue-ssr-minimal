const createApp = require('path-to-server-bundle');
const server = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const fs = require('fs');

const renderer = createBundleRenderer(
	createApp,
	{
		runInNewContext: false,
		template: fs.readFileSync('./index.template.html', 'utf-8'),
		// clientManifest
	}
);

const context = {
	title: 'Vue SSR',
	meta: `
		<meta name="viewport" content="width=device-width, initial-scale=1">
	`
};

server.get('*', (request, response) => {
	const context = { url: request.url };

	renderer.renderToString(context, (err, html) => {
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
});

server.listen(8080);