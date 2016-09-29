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
		test: /\.styl$/,
		loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
	},
]