const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const webpackConfig = {
 mode: 'development',
 entry: {
  index: path.join(__dirname, 'src/main.js')
 },
 output: {
  filename: '[name].bundle.js',
  path: path.join(__dirname, 'dist')
 },
 devtool: 'eval-cheap-source-map',
 module: {
  rules: [
   {
    test: /\.(js|jsx)/,  //'\.(js|jsx)',
    use: {
     loader: 'babel-loader',
    },
    exclude: [path.join(__dirname, 'node_modules')]
   }
  ]
 },
 plugins: [new CleanWebpackPlugin()]
}

module.exports = webpackConfig