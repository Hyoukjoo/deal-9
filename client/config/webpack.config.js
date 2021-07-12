import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { distPath, entryPath } from "./paths.js";

const isDev = process.env.NODE_ENV === "development";

console.log("dist", distPath);

const config = {
  name: "web",
  mode: isDev ? "development" : "production",
  devtool: isDev ? "cheap-module-source-map" : "hidden-source-map",
  entry: entryPath,
  output: {
    filename: "bundle.js",
    path: distPath,
  },
  devServer: {
    contentBase: distPath,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ 
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: 3,
                  useBuiltIns: "entry",
                  targets: {
                    browsers: ["> 1%, not dead"],
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
        exclude: /node_modules/
    },
    ],
  },
};

export default config;
