const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = env => {
  console.log('ENV:::', env.MODE);
  const fileEntry = env.MODE === 'development' ? './src/components/npm-component/index.js' : './src/index.js';

  console.log('FILE_ENTRY', fileEntry);
  return ({
    devServer: {
      port: 9000
    },
    entry: fileEntry,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    }
  });
};

/*
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = env => {
  console.log('ENV:::', env.MODE)
  const fileEntry = env.MODE === 'development' ? './src/App.js' : './src/index.js'

  console.log('FILE_ENTRY', fileEntry)
  return({
    devServer: {
      port: 9000
    },
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'index.js',
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    }
  })
}

 */
