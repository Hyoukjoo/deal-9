const setBabelConfig = (config) =>
  config.module.rules.push({
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
              useBuiltIns: "usage",
              shippedProposals: true,
              targets: {
                browsers: [">= 1%, not dead"],
              },
            },
          ],
        ],
      },
    },
  });

export default setBabelConfig;
