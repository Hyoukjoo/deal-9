import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

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
    ],
  },
};

export default config;
