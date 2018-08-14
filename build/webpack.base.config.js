const VueLoader = require('vue-loader');

module.exports = {
	module: {
		rules: [
			{
				test: '/\.js$/',
				exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [ new VueLoader.VueLoaderPlugin() ]
};
