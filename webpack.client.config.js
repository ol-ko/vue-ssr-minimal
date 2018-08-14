const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-ssr-renderer/client-plugin');

module.exports = merge(baseConfig, {
	entry: './entry-client.js',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module) {
				return (
					/node_modules/.test(module.context) && !/\.css$/.test(module.request)
				)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		}),

		new VueSSRClientPlugin()
	]
});