const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'app/main.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'app/index.html')
    })
  ]

}
