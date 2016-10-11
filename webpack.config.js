var path = require("path");
var webpack           = require( "webpack" );
var merge             = require( "webpack-merge" );
var HtmlWebpackPlugin = require( "html-webpack-plugin" );
var autoprefixer      = require( "autoprefixer" );
var ExtractTextPlugin = require( "extract-text-webpack-plugin" );
// var CopyWebpackPlugin = require( "copy-webpack-plugin" );
var commonLoaders = require("./webpack.loaders");
var sassLintPlugin = require("sasslint-webpack-plugin");


var TARGET_ENV = process.env.npm_lifecycle_event === "build" ? "production" : "development";

// common webpack config
var commonConfig = {

	output: {
		path: path.resolve( __dirname, "dist/" ),
		filename: "[hash].js"
	},

	resolve: {
		modulesDirectories: ["node_modules"],
		extensions: ["", ".js", ".elm", ".styl", ".sass", ".scss"]
	},

	module: {
		noParse: /\.elm$/,
		loaders: commonLoaders
	},

	plugins: [
		new sassLintPlugin({
			context: ["./app/styles/sass/*.s+(a|c)ss"],
			ignorePlugins: ["extract-text-webpack-plugin"]
		}),
		new HtmlWebpackPlugin({
			template: "app/static/index.html",
			inject:   "body",
			filename: "index.html"
		}),
		new ExtractTextPlugin("styles.css")
	],

	postcss: [ autoprefixer]

};

if ( TARGET_ENV === "development" ) {
	console.log( "Serving locally...");

	module.exports = merge( commonConfig, {

		entry: [
			"webpack-dev-server/client?http://localhost:8080",
			"app/static/index.js"
		],

		devServer: {
			inline:   true,
			progress: true
		},

		module: {
			loaders: [
				{
					test:    /\.elm$/,
					exclude: [/elm-stuff/, /node_modules/],
					loader:  "elm-hot!elm-webpack?verbose=true&warn=true"
				}
			]
		}

	});
}

// if ( TARGET_ENV === "production" ) {
// 	console.log( "Building for prod...");
//
// 	module.exports = merge( commonConfig, {
//
// 		entry: path.join( __dirname, "app/static/index.js" ),
//
// 		module: {
// 			loaders: [
// 				{
// 					test:    /\.elm$/,
// 					exclude: [/elm-stuff/, /node_modules/],
// 					loader:  "elm-webpack"
// 				},
// 				// {
// 				// 	test: /\.(css|scss)$/,
// 				// 	loader: ExtractTextPlugin.extract( "style-loader", [
// 				// 		"css-loader",
// 				// 		"postcss-loader",
// 				// 		"sass-loader"
// 				// 	])
// 				// }
// 			]
// 		},
//
// 		plugins: [
// 			new CopyWebpackPlugin([
// 				{
// 					from: "app/static/img/",
// 					to:   "static/img/"
// 				},
// 				// {
// 				// 	from: "app/favicon.ico"
// 				// },
// 			]),
//
// 			new webpack.optimize.OccurenceOrderPlugin(),
//
// 			// extract CSS into a separate file
// 			new ExtractTextPlugin( "./[hash].css", { allChunks: true } ),
//
// 			// minify & mangle JS/CSS
// 			new webpack.optimize.UglifyJsPlugin({
// 				minimize:   true,
// 				compressor: { warnings: false }
// 				// mangle:  true
// 			})
// 		]
//
// 	});
// }
