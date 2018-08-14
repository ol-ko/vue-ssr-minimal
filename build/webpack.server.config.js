const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
	entry: './src/entry-server.ts',
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: '[name].[chunkhash].js',
        libraryTarget: 'commonjs2'
    },
	target: 'node',
	devtool: 'source-map',
	plugins: [
		new VueSSRServerPlugin()
	]
});
