// const path = require('path'); // 引入node中的path模块

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@element': '@/components/element', // 设置路径别名
            },
        },
    },
};