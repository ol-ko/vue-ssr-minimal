const path = require('path');
const createApp = require('./dist/vue-ssr-server-bundle.json');
const express = require('express');
const serverApp = express();
const { createBundleRenderer } = require('vue-server-renderer');
const fs = require('fs');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(
	createApp,
	{
		runInNewContext: false,
		template: fs.readFileSync('./index.template.html', 'utf-8'),
		clientManifest
	}
);

serverApp.get('*.*', express.static(path.resolve(__dirname, 'dist')));

serverApp.get('*', (request, response) => {
	const context = {
		url: request.url,
        title: 'Vue SSR',
        meta: `
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<base href="/dev/">
			<link rel="icon" href="/dev/favicon.png" type="image/x-icon" />
		`
	};

	console.log(request.url);

	renderer.renderToString(context, (err, html) => {
        response.set('Content-Type', 'text/html');
		if (err) {
			console.log(err);
			response.end(`${err.statusCode}: ${err.message}
			${err.stack}`);
		} else {
            response.end(html);
		}
	})
});

module.exports = serverApp;
