module.exports = {
    configureWebpack : {
        resolve: {
            extensions:[], //文件后缀名的配置(配置后引入文件可以省略后缀名)
            alias: {
                'assets':'@/assets',//@表示src,是默认配置过的
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    },
    /* devServer: {
        host:"192.168.31.253",
        port:8080,
    } */
}