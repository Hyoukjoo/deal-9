import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import dotenv from "dotenv";

import {
  atomPath,
  commonPath,
  distPath,
  entryPath,
  moleculePath,
  organismPath,
  pagePath,
  templatePath,
  utilPath,
} from "./paths.js";
import setBabelConfig from "./babel-config.js";
import setScssConfig from "./scss-config.js";
import setFileConfig from "./file-config.js";
import setDevelopmentConfig from "./webpack-development.js";
import setProductionConfig from "./webpack-production.js";

const isDev = process.env.NODE_ENV === "development";

const clientConfig = {
  name: "web",
  target: "web",
  mode: isDev ? "development" : "production",
  devtool: isDev ? "cheap-module-source-map" : "hidden-source-map",
  entry: entryPath,
  output: {
    filename: "[name].js",
    path: distPath,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!server.js"],
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
  module: {
    rules: [],
  },
  resolve: {
    alias: {
      "@atoms": atomPath,
      "@molecules": moleculePath,
      "@organisms": organismPath,
      "@templates": templatePath,
      "@pages": pagePath,
      "@utils": utilPath,
      "@common": commonPath,
    },
  },
};

setBabelConfig(clientConfig);
setFileConfig(clientConfig);
setScssConfig(clientConfig, isDev);

if (isDev) {
  setDevelopmentConfig(clientConfig);
} else {
  setProductionConfig(clientConfig);
}

export default clientConfig;
