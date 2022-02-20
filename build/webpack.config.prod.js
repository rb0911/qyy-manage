const WebpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')

const webpackConfig = WebpackMerge.merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      //TerserPlugin
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {
            // warning: false,
            drop_console: false, //是否注释掉console
            dead_code: true,
            drop_debugger: true
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: {
            comments: false,
            beautify: false
          },
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
          sourceMap: false
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom|prop-types|redux|react-redux|redux-thunk|axios|es6-promise|jquery)[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all',
          minChunks: 2,
          priority: -10
        },
      }
    }
  }
})

module.exports = webpackConfig
