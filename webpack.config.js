const path = require('path')
module.exports = {
	entry: "./js/main.js",
	watch: true,
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	mode: "development",
	devtool: "eval-source-map",
}