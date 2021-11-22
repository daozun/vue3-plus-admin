const { NODE_ENV, VUE_APP_PORT, VUE_APP_MOCK } = process.env;
const Webpack = require('webpack');
const WebpackBar = require('webpackbar');
const {
  donation,
  providePlugin,
  webpackBarName,
  webpackBanner,
  donationConsole,
  electronBuilder
} = require('./src/config');

if (donation) donationConsole();
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: VUE_APP_PORT || 8000,
    overlay: {
      warnings: false,
      errors: false,
    },
    // 配置反向代理
    /*
    proxy: {
        '/api': {
          target: '<url>',
          ws: true,
          changeOrigin: true
        },
        '/foo': {
          target: '<other_url>'
        }
    }, 
    */
    before: function (app, server) {
      if (NODE_ENV === 'development' && VUE_APP_MOCK === 'true') {
        console.info('测试环境事前执行')
      }
    },
  },
  pluginOptions: { electronBuilder },
  // 修改webpack的配置
  configureWebpack () {
    return {
      // 不需要打包的插件
      externals: {
        // 'vue': 'Vue',
        // 'vue-router': 'VueRouter',
        // 'element-ui': 'ELEMENT'
      },
      // resolve: {
      //   alias: {
      //     '@': resolve('src'),
      //     '*': resolve(''),
      //   },
      // },
      plugins: [
        new Webpack.ProvidePlugin(providePlugin),
        new WebpackBar({
          name: webpackBarName,
        }),
      ],
    };
  },
  chainWebpack (config) {
    const entry = config.entry('app');
    entry.add('@/mock').end();
    config
      .plugin('banner')
      .use(Webpack.BannerPlugin, [`${webpackBanner}${new Date().toLocaleTimeString()}`])
      .end();
  },
};
