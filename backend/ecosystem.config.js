module.exports = {
  apps: [
    {
      name: 'internship-expo-backend',
      script: './dist/index.js',
      instances: 'max', // or '2' for dev limit
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      }
    },
    {
      name: 'internship-expo-worker',
      script: './dist/worker.js',
      instances: 1, // Only need 1 worker usually
      env: {
        NODE_ENV: 'development',
      }
    }
  ]
};
