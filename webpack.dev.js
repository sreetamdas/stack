const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: path.join(__dirname, "public"),
		compress: true,
		hot: true,
		inline: true,
		port: 9000,
		historyApiFallback: true,
	},
});
