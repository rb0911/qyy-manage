const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.dev')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd()) //rocess.cwd() node js 执行进程时候的目录， __drame: 模块目录名称
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
// const createDevServerConfig = require('./server.config')

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
const host = process.env.HOST || '0.0.0.0'

const config = webpackMerge.merge(baseConfig, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: resolveApp('dist'),
        // openPage: '../dist/index.html',
        inline: true,
        port: 9000,
        https: protocol === 'https',
        overlay: {
            errors: true
        },
        hot: false,
        open: true,
        proxy: {
            '/sectateway/aectcomm/**': {
                'target': 'http://3333',
                'changeOrigin': true,
                "secure": false
            },
            '/gsmweb/**': {
                'target': 'http:/uat.citivelocity.com',
                'changeOrigin': true,
                "secure": false
            }
        },
        host: host,
        historyApiFallback:true  //缺少该配置，会出现上面的错误
    }
})

module.exports = config