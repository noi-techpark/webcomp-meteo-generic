const path = require("path");
const webpack = require("webpack");
// require("dotenv").config();
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./code/webcomp-meteo-generic.js"),
  watch: true,
  output: {
    path: path.resolve(__dirname, "./work/scripts"),
    filename: "webcomp-meteo-generic.js",
  },
  plugins: [
    new Dotenv(),
  ],
  // webpack-dev-server configuration
  devServer: {
    contentBase: path.resolve(__dirname, "./work"),
    publicPath: "/scripts/",
    watchContentBase: true,
    compress: true,
    port: 8080,
    open: true,
    openPage: "meteo.html",
    overlay: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {},
        },
      },
      {
        test: /\.(png|jpg|gif|ttf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
