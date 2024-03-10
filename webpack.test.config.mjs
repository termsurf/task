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
    'test.browser': './te/browser.ts',
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'proce/browser',
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
      path: 'path-browserify',
      process: path.resolve('proce/browser'),
      stream: 'stream-browserify',
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
