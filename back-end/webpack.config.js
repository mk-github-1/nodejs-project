const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // clean: true,
    // publicPath: "",
  },
  devtool: "source-map",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // source-map-loaderがなくても生成されるが、明示的に指定しています。
      /*
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      */
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 5000,
    devMiddleware: {
      publicPath: "/dist",
    },
    hot: true,
    historyApiFallback: true,
  },
};
