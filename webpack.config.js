let path = require('path'),
 		HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: '/dist/'
	},
	devtool: "inline-source-map",
	devServer: {
		open: true,
		static: {
			directory: path.join(__dirname, './'),
		},
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		})
	],
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? 'source-map' : 'eval-cheap-module-source-map';
	// conf.target = isProd ? 'browserslist' : 'web';
	// console.log('conf.target', conf.target)
	return conf;
}
