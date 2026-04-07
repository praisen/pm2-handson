module.exports = {
  apps: [
    {
      name: "my-app",
      script: "./app.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "development",
        PORT: 3000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4000
      }
    }
  ]
};
