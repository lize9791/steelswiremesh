module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000/',
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.ts',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
		},
	},
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json', '.ts'],
			alias: {},
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					exclude: /node_modules/,
					options: {
						appendTsSuffixTo: [/\.vue$/],
					},
				},
			],
		},
	},
}
