const path = require("path");

module.exports = {
  entry: {
    app: `./lib/index.js`
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
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
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000
  }
};
