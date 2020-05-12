module.exports = {
  apps: [
    {
      name: 'porfolio',
      cwd: './server',
      script: 'npm',
      args: 'start',
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
    },
  ],
};
