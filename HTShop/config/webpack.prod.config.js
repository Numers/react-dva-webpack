const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js?[hash]',
    "chunkFilename" : "[id].js?[hash]",
    "publicPath" : './',
  },
  // mode: "production",
  module:{
    rules: [
      {
        test: /\.scss|\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({//提取公共的代码
      names: ['vendor', 'manifest'],

      //     首先把重复引用的库打包进vendor.js, 这时候我们的代码里已经没有重复引用了, chunk文件名存在vendor.js中,
      //     然后我们在执行一次CommonsChunkPlugin, 把所有chunk的文件名打包到manifest.js中.
      //     这样我们就实现了chunk文件名和代码的分离. 这样修改一个js文件不会导致其他js文件在打包时发生改变, 只有manifest.js会改变.

    }),
    new ExtractTextPlugin('[name].css?[chunkhash]', {allChunks: true}), //将css从style里抽离出
    new webpack.optimize.UglifyJsPlugin({//丑化代码
      mangle: true,
      compress: {
        warnings: false,
      },
    }),

    new HtmlWebpackPlugin({
      filename: path.join(process.cwd(), 'dist/index.html'),
      template: 'index-build.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
  ]
});
