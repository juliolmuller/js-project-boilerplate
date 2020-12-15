
module.exports = {
  entry: './src/index.js',
  // entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/build/`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
