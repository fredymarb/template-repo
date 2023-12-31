const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: {
		bundle: "./src/index.js",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/template.html",
			title: "New Project1",
			inject: "body",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},

			{
				test: /\.(png |svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
