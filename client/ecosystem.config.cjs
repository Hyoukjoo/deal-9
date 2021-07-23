module.exports = {
  apps: [
    {
      name: "deal-9-client",
      script: "./dist/server.js",
      instances: 1,
      exec_mode: "cluster",
      watch: true,
    },
  ],
};
