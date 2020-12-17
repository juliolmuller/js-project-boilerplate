
module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.js',
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
