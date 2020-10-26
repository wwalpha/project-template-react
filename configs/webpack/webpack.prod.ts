import { Configuration } from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';

const prod: Configuration = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production',
      filename: 'index.html',
      template: path.join(__dirname, '../ejs/app.ejs'),
      minify: false,
      hash: true,
      inject: 'body',
    }),
  ],
};

export default merge(baseConfig, prod);
