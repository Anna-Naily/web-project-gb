const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack");

module.exports = {
  entry: "./main.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new ImageminPlugin({
      bail: false,
      cache: true,
      imageminOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
        ],
      },
    }),
  ],
};
