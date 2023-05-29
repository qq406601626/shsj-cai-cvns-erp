module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    devServer:{
        proxy:{
            '/api': {
                target: 'http://sjjc.h5.minggen.wang',
                pathRewrite: {
                    '^/api' : ''
                }
            },
        }
        // proxy:'http://sjjc.h5.minggen.wang'
    }
}
