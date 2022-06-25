const { NONAME } = require("dns");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
module.exports =  merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname,"dist"),
    assetModuleFilename: "images/[name][ext]"
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/template.html"
  })
],
  module: {
    rules: [
     {
        test:/\.scss$/,
        use: [
          "style-loader",   // 3. Injects Styles into DOM
          "css-loader",     // 2. Turns CSS into JS
          "sass-loader"     // 1. Turns SASS into CSS
        ],
      }, 
    ]
  }
});