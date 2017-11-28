const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'app/main.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  devServer: {
    contentBase: './dist', // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true// 实时刷新
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'app/index.html')
    })
  ]
}
