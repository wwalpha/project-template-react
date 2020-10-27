import * as path from 'path';
import { Configuration, LoaderOptionsPlugin, EnvironmentPlugin } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const configs: Configuration = {
  entry: ['./src/index.tsx'],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: './',
  },
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new EnvironmentPlugin(['ENVIRONMENT']),
    new LoaderOptionsPlugin({
      debug: false,
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       to: '.',
    //     },
    //   ],
    // }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10,
        },
      },
    },
    runtimeChunk: true,
  },
  bail: true,
};

export default configs;
