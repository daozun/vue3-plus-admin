/**
 * @description 通用配置|主题配置|网络配置，建议在当前目录下修改config.js修改配置，会覆盖默认配置，也可以直接修改默认配置
 */
//默认配置
const config = {
  donation: true,
  providePlugin: {},
  storeKey: 'Agilor',
  // webPackBar 配置项
  webpackBarName: 'vue3-element-ui-plus-cli',
  webpackBanner: ' build: vue3-element-ui-plus-cli  \n time: ',
  donationConsole () {
    const chalk = require('chalk');
    console.log(chalk.green(`> 欢迎使用vue3-element-ui-plus-cli`));
    console.log(chalk.green(`> 如果您不希望显示以上信息，可在config中配置关闭`));
    console.log('\n');
  },
  // electron 桌面端应用配置项
  electronBuilder: {
    // electron 构建配置
    builderOptions: {
      productName: 'vue3-element-typescript-cli', // 项目名，也是生成的安装文件名，即vue3-element-typescript-cli.exe
      appId: 'agilor.vue3-element-typescript-cli', // 包名
      copyright: 'Copyright © 2021-present Agilor', // 版权
      nsis: {
        oneClick: false, // 是否一键安装
        allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
        allowToChangeInstallationDirectory: true, // 允许修改安装目录
        installerIcon: './build/electron/icon.ico', // 安装图标
        uninstallerIcon: './build/electron/icon.ico', // 卸载图标
        installerHeaderIcon: './build/electron/icon.ico', // 安装时头部图标
        createDesktopShortcut: true, // 创建桌面图标
        createStartMenuShortcut: true, // 创建开始菜单图标
        shortcutName: 'vue3-element-typescript-cli', // 图标名称
      },
      dmg: {
        // macOSdmg
        contents: [
          {
            x: 410,
            y: 150,
            type: 'link',
            path: '/Applications',
          },
          {
            x: 130,
            y: 150,
            type: 'file',
          },
        ],
      },
      mac: {
        // mac
        icon: './build/electron/icon.icns',
        artifactName: '${productName}-v${version}-mac.${ext}',
      },
      win: {
        // win 相关配置
        icon: './build/electron/icon.ico',
        artifactName: '${productName}-v${version}-win32-setup.${ext}',
        target: [
          {
            target: 'nsis', // 利用nsis制作安装程序
            arch: [
              // 这个意思是打出来32 bit + 64 bit的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打32的安装包。
              // "x64",
              'ia32',
            ],
          },
        ],
      },
      // @see https://blog.csdn.net/weixin_38989540/article/details/113837446
      linux: {
        icon: './build/electron/401.png',
        artifactName: '${productName}-v${version}-linux.${ext}',
      },
    },
  },
  // 打包配置项
};

//导出配置（以自定义配置为主）
module.exports = Object.assign({}, config);
