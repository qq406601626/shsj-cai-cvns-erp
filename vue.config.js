module.exports = {
    lintOnSave: false,
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
