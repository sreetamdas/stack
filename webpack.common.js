const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");

module.exports = {
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".tsx", ".ts"],
		modules: [
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "node_modules"),
		],
	},
	output: {
		filename: "[name].bundle.js",
		chunkFilename: "[name].bundle.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			filename: "index.html", //relative to root of the application
		}),
		new HtmlWebpackRootPlugin(),
		new Dotenv({
			path: path.resolve(__dirname, ".env"),
		}),
	],
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
};
