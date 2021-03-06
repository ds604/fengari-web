"use strict";

const webpack = require('webpack');
const path = require('path');

module.exports = [
	{
		entry: './src/fengari-web.js',
		target: 'web',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'fengari-web.js',
			library: 'fengari',
			libraryTarget: 'umd'
		},
		node: false,
		module: {
			rules: [
				{
					test: [/\.js$/],
					loader: 'babel-loader',
					options: {
						presets: [['env', {
							"targets": {
								"browsers": ["last 2 versions", "safari >= 7"]
							}
						}]]
					}
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				"typeof process": JSON.stringify("undefined")
			})
		]
	}
];
