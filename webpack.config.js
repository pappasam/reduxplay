const path = require('path')
const merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'test')
}

const common = {
  entry: {
    app: path.join(PATHS.src, 'main.js')
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: [PATHS.src],
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: [PATHS.src],
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  }
}

if (TARGET === 'build' || TARGET === 'execute') {
  module.exports = common
}
