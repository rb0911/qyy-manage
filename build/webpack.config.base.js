const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const OpimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    index: path.join(__dirname, '../src/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //'\.(js|jsx)',
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, 'node_modules')]
      },
      {
        test: /\.css$/,
        use: [MinCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [MinCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'index',
      template: path.join(__dirname, '../public/index.html'), // 源模板文件
      filename: path.join(__dirname, '../dist/index.html'), // 输出文件【注意：这里的根路径是module.exports.output.path】
      showErrors: true,
      inject: 'body',
      chunks: ['vendors', 'index', 'commons']
    }),
    new MinCssExtractPlugin({filename: '[name].css'}),
        new OpimizeCSSAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
  ]
}

module.exports = webpackConfig
