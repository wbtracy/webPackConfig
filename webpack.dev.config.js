const path = require('path');
const webpack = require('webpack');

module.exports = {

    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, './src/index.js')
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
          test: /\.(css|less)$/,
          exclude:[/node_modules/],
          loaders: ['style-loader?sourceMap',
              'css-loader?modules&importLoaders=1&localIdentName=[name]-[hash:base64:5]',
              'less-loader?modules&importLoaders=1&localIdentName=[name]-[hash:base64:5]']
      }, {
          test: /\.(css|less)$/,
          include: [/node_modules/],
          loader: 'style-loader!css-loader!less-loader'
      }, {
          test: /\.(png|jpg|gif|JPG)$/,
          use: [{
              loader: 'url-loader',
              options: {
                  limit: 100000,
                  name: '[name].[ext]',
                  outputPath: '/image'
              }
          }]
      }]
    },

    devServer: {
        port: 8888,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        inline: true,
        host: '0.0.0.0',
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};

