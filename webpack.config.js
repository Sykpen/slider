var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js",
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		watchContentBase: true,
		hot: true,
		port: 3000,
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: "babel-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
		],
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
		}),
	],
};
