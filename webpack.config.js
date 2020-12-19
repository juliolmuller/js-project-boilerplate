/* eslint-env node */
const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');

const buildMode = process.env.NODE_ENV;
const buildDir = buildMode === 'production' ? 'dist' : 'public';

module.exports = {
  mode: buildMode,
  target: ['web', 'es5'],
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, buildDir),
    filename: 'scripts/bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    overlay: true,
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ico|gif|jpe?g|png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:6].[ext]',
              publicPath: '../',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtract({
      filename: 'styles/bundle.css',
    }),
    new OptimizeCssAssets({}),
  ],
};
