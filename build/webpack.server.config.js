const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
	entry: './src/entry-server.ts',
    output: {
        // path: path.resolve(__dirname, '../dist'),
        // filename: '[name].[chunkhash].js',
        libraryTarget: 'commonjs2'
    },
	target: 'node',
	plugins: [
		new VueSSRServerPlugin()
	]
});
