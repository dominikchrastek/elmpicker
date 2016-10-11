var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = [
	{
		test: /\.(eot|ttf|woff|woff2|svg)$/,
		loader: 'file-loader'
	},
	{
		test: /\.css$/,
		loader: 'style-loader!css-loader!postcss-loader'
	},
	{
		test: /\.s[a|c]ss$/,
		loader: ExtractTextPlugin.extract('style-loader', '!css!sass')
	},
	{
		test: /\.styl$/,
		loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
	}
];
