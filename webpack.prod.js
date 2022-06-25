const { NONAME } = require("dns");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname,"dist"),
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test:/\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,  // 3. extract CSS into files
          "css-loader",                 // 2. Turns CSS into Common JS
          "sass-loader"                 // 1. Turns SASS into CSS
        ],
      },
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        }
      })
    ]
  }
});