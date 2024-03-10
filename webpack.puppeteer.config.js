import path from 'path'
import * as glob from 'glob'

export default {
  devtool: 'inline-source-map',
  mode: 'development',
  watchOptions: {
    ignored: ['node_modules', '**/node_modules'],
  },
  entry: glob
    .sync('./code/puppeteer/**/*.{ts,js}')
    .reduce((acc, item) => {
      const name = item.split('.')
      name.pop()
      acc[name.join('.')] = `./${item}`
      return acc
    }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(`./host`),
    library: 'task',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.puppeteer.config.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': `./`,
    },
  },
}
