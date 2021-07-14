const setFileConfig = (config) => {
  config.module.rules.push({
    test: /\.(woff|woff2|otf)$/,
    exclude: /node_modules/,
    use: {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "public/fonts/",
      },
    },
  });
};

export default setFileConfig;
