const path = require('path');
const webpack = require('webpack');
module.exports = {

    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],

    devtool: 'inline-source-map',

    /*输出到dist文件夹，输出文件名字为bundles.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },

    module: {
      rules: [{
          test: /\.js$/,
          use: ['babel-loader?cacheDirectory=true'],
          include: path.join(__dirname, 'src')
      }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      }, {
          test: /\.(png|jpg|gif|JPG)$/,
          use: [{
              loader: 'url-loader',
              options: {
                  limit: 8192,
              }
          }]
      }]
    },

    devServer: {
        port: 8888,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};

