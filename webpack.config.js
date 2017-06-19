module.exports = {
  context: __dirname,
  entry: {
    login: './src/components/login.js',
    main: './src/index.js'
  },
  output: {
    path: __dirname + '/lib',
    filename: "[name].js"
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
