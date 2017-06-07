module.exports = {
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  output: {
    path: __dirname,
    filename: "./lib/bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
}
