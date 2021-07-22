module.exports = {
  apps: [
    {
      name: "deal-9",
      script: "./dist/server.js",
      instances: 0,
      exec_mode: "cluster",
      watch: true,
    },
  ],
};
