const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: `./src/index.js`
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/jumping-letters",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./index.html"
    })
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-2'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
       test: /\.(jpg|svg|png|gif)$/i,
       loader: 'file-loader?name=style/images/[name].[ext]'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }

    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000
  }
};
