const { NONAME } = require("dns");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  }
  ,
  module: {
    rules: [
      
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        type: "asset/resource"
      },
    ],
  },
}