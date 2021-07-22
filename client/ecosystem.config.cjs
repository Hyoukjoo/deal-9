module.exports = {
  apps: [
    {
      name: "deal-9",
      script: "./src/server.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
