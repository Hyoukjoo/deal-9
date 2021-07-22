module.exports = {
  apps: [
    {
      name: "deal-9",
      script: "./src/server.js",
      instances: 1,
      exec_mode: "cluster",
      watch: true,
    },
  ],
};
