import path from 'path'
import webpack from 'webpack'
// const HtmlWebpackPlugin = require('html-webpack-plugin')

export default {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'web',
  watchOptions: {
    poll: true,
    ignored: [
      'node_modules',
      '**/node_modules',
      'code/**/node.ts',
      'code/cli/**/*.ts',
      '**/host',
    ],
  },
  entry: {
    'task.browser': './test/browser.ts',
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(`./host`),
    globalObject: 'window',
    library: {
      name: 'task',
      type: 'umd',
    },
  },
  resolve: {
    alias: {
      '~/code': path.resolve('./code'),
    },
    extensions: ['', '.ts', '.js'],
    fallback: {
      path: path.resolve('path-browserify'),
      process: path.resolve('process/browser'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.[tj]sx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.standalone.json',
            },
          },
        ],
        exclude: /node_modules|host/,
      },
    ],
  },
}
