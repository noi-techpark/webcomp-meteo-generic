const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/route_widget.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "routeplanner_widget.min.js",
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [{ loader: "css-loader" }, { loader: "sass-loader" }],
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
