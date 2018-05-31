var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  entry: [
    './src/index.js',
    'babel-polyfill'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js?[hash]',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

  ],
  "devServer": {
    "port": 8080,
    "historyApiFallback": {
      index: '/dist/'
    },
    proxy: {
      '/proxy': {
        target: 'http://news.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ],
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: path.join(process.cwd(), 'src')
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }
    ]
  }
};
