const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	webpack: {
		configure: {
			optimization: {
				minimize: true,
				minimizer: [
					new CssMinimizerPlugin(),
					new TerserPlugin({
						extractComments: false,
						terserOptions: {
							format: {
								comments: false,
							},
						},
					}),
				],
			},
		},
		plugins: [
			new BundleAnalyzerPlugin(),
			new CompressionPlugin(),
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		],
	},
};
