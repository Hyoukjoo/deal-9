const setFileConfig = (config) => {
  config.module.rules.push({
    test: /\.(woff|woff2|otf|svg)$/,
    exclude: /node_modules/,
    use: {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "fonts/",
      },
    },
  });
};

export default setFileConfig;
