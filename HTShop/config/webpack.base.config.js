var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

  ],
  "devServer": {
    "port": 8080,
    "historyApiFallback": {
      index: '/build/'
    },
    // "proxy": {
    //     '/factor': {
    //         target: 'http://test-factor-api.glp.zmq.cc/factor',
    //         secure: false
    //     },
    //     '/user': {
    //         target: 'http://test-member.glp.zmq.cc/user/',
    //         secure: false
    //     },
    //     '/manage': {
    //         target: 'http://test-manage.glp.zmq.cc/manage',
    //         secure: false
    //     },
    //     '/api': {
    //         target: 'http://172.16.6.29:8080/api',
    //         secure: false
    //     }
    // }
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
