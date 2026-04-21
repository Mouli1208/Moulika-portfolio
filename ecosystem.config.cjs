module.exports = {
  apps: [
    {
      name: 'applywizz-dev',
      script: 'npm',
      args: 'run dev',
      instances: 1,
      watch: false,
      ignore_watch: ['node_modules', 'dist'],
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};
