const VueLoader = require('vue-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	module: {
		rules: [
			// {
			// 	test: '/\.js$/',
			// 	exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     options: {
            //         presets: ['@babel/preset-env']
            //     }
			// },
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
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
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
	plugins: [ new VueLoader.VueLoaderPlugin() ]
};
