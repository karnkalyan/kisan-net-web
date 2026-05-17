module.exports = {
  apps: [
    {
      name: "kisan-web",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3002, // Explicitly set the port here
      },
    },
  ],
};
