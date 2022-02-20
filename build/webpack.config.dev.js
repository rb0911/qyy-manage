const WebpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const webpackConfig = WebpackMerge.merge(baseConfig, {
 mode: 'development',
 devtool: 'cheap-module-eval-source-map',
 optimization: {
  splitChunks: {
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/](react|react-dom|prop-types|redux|react-redux|redux-thunk|axios|es6-promise|jquery)[\\/]/,
        name: 'vendors',
        enforce: true,
        chunks: 'all',
        priority: 10
      },
    }
  }
}
})

module.exports = webpackConfig