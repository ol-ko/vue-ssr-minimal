const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
	entry: './src/entry-client.ts',
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].[chunkhash].js',
    },
	plugins: [
		new VueSSRClientPlugin()
	],
    devServer: {
        contentBase: path.resolve(__dirname, './dist/client'),
        compress: true,
        port: 9000
    }
});
