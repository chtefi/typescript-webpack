module.exports = {
	entry: './app.ts',
	output: {
		path: './dest',
		filename: 'bundle.js'
	},
  resolve: { // used when require('xxx'). Default webpack.resolve + .ts
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts' ]
  },
	module: {
		loaders: [
			{ test: /\.ts/, loaders: [ 'ts-loader'], exclude: /node_modules/ }
		]
	}
}
