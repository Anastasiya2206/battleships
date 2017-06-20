module.exports = {
  context: __dirname,
  entry: {
    login: './src/login.js',
    main: './src/index.js'
  },
  output: {
    path: __dirname + '/lib',
    filename: "[name].js",
    publicPath: __dirname + '/lib'
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
