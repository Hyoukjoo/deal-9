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
