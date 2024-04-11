

const { defineConfig } = require('@vue/cli-service')
publicPath: process.env.NODE_ENV === 'production'
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/alg' ,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }


})


/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
*/