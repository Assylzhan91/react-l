const path = require('path'),
 			HtmlWebpackPlugin = require('html-webpack-plugin'),
			{ CleanWebpackPlugin } = require('clean-webpack-plugin');

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
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-react"],
					}
				},
				exclude: '/node_modules/'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
			title: 'asdadasdasda asd as'
		}),
		new CleanWebpackPlugin()
	],
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? 'source-map' : 'eval-cheap-module-source-map';
	// conf.target = isProd ? 'browserslist' : 'web';
	// console.log('conf.target', conf.target)
	return conf;
}
