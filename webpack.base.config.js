const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	module: {
		rules: [
			{
				test: '/\.js$/',
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: isProduction
				}
			},
			{
				test: /\.css/,
				use: isProduction ? ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'vue-style-loader'
				}) : ['vue-style-loader', 'css-loader']
			}
		]
	},
	plugins: isProduction ? [new ExtractTextPlugin({ filename: 'common.[chunkhash].css'})] : []
};