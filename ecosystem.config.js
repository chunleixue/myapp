module.exports = {
  apps: [
    {
      name: 'vue3-admin',
      script: 'vue3-admin-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '121.5.28.174',
      ref: 'origin/master',
      repo: 'git@github.com:chunleixue/myapp.git',
      path: '/workspace/vue3-admin',
      'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && npm run build:release && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
