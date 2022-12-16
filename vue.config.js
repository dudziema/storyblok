const { defineConfig } = require('@vue/cli-service')
const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ScriptSetup({ /* options */ }),
    ],
  }
})
