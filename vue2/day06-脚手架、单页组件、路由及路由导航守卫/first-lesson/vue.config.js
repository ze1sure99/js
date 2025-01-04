const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  /*取消脚手架的eslint*/
  lintOnSave: false,
  transpileDependencies: true
})
