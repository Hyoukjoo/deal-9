import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import {
  atomPath,
  commonPath,
  distPath,
  entryPath,
  moleculePath,
  organismPath,
  pagePath,
  publicPath,
  serverPath,
  templatePath,
  utilPath,
} from "./paths.js";
import setBabelConfig from "./babel-config.js";
import setScssConfig from "./scss-config.js";
import setFileConfig from "./file-config.js";

const isDev = process.env.NODE_ENV === "development";

const clientConfig = {
  name: "web",
  target: "web",
  mode: isDev ? "development" : "production",
  devtool: isDev ? "cheap-module-source-map" : "hidden-source-map",
  entry: entryPath,
  output: {
    filename: "bundle.js",
    path: distPath,
    publicPath: publicPath,
  },
  watch: false,
  devServer: {
    contentBase: distPath,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!server.js"],
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

const serverConfig = {
  name: "server",
  target: "node",
  mode: "development",
  entry: serverPath,
  output: {
    filename: "server.js",
    path: distPath,
  },
  module: {
    rules: [],
  },
};

setBabelConfig(clientConfig);
setFileConfig(clientConfig);
setScssConfig(clientConfig, isDev);

export default clientConfig;
