// const path = require('path'); // 引入node中的path模块
module.exports = {
  // chainWebpack: (config) => {
  //     config.resolve.alias.set('@element', path.resolve(__dirname,
  //         'src/components/element')); // 设置路径别名
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element', // 设置路径别名
      },
    },
  },
};
