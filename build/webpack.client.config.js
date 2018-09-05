const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(baseConfig, {
	entry: './src/entry-client.ts',
    optimization: {
	    splitChunks: {
            chunks: 'all',
            minSize: 0,
            minChunks: 1
        }
    },
	plugins: [
		new VueSSRClientPlugin()
	]
});
