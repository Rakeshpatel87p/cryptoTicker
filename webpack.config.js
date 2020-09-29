const path = require("path");
const webpack = require("webpack");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(tsx|jsx)$/,
        enforce: "pre",
        use: [
          "babel-loader",
          { loader: "tslint-loader", options: { typeCheck: true } },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StylelintPlugin({ files: "**/*.js" }),
  ],
};
