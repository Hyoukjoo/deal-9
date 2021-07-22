module.exports = {
  apps: [
    {
      name: "deal-9-server",
      script: "./src/app.js",
      exec_mode: "cluster",
      instances: 0,
    },
  ],
};
