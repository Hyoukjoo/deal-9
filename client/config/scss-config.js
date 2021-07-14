import MiniCssExtractPlugin from "mini-css-extract-plugin";

const getLoaders = (isDev) => {
  const loaders = [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    "css-loader",
    "resolve-url-loader",
    "sass-loader",
  ];

  return loaders;
};

const setScssConfig = (config, isDev) => {
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
  );

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: getLoaders(isDev),
    exclude: /node_modules/,
  });
};

export default setScssConfig;
