const VueLoader = require('vue-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';

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
			},
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.s(c|a)ss?$/,
                use: isProduction
                    ? ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: { minimize: true }
                            },
                            'sass-loader'
                        ],
                        fallback: 'vue-style-loader'
                    })
                    : ['vue-style-loader', 'css-loader', 'sass-loader']
            },
		]
	},
	plugins: [ new VueLoader.VueLoaderPlugin() ]
};
