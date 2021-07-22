import { distPath } from "./paths.js";

const setDevelopmentConfig = (config) => {
  config.devServer = {
    contentBase: distPath,
    hot: true,
    historyApiFallback: true,
  };
};

export default setDevelopmentConfig;
