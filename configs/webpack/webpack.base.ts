import * as path from 'path';
import { Configuration, NoEmitOnErrorsPlugin, LoaderOptionsPlugin, EnvironmentPlugin } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import Dotenv from 'dotenv-webpack';

const configs: Configuration = {
  target: 'web',
  entry: ['./index.tsx'],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../../build'),
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
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [
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
    // @ts-ignore
    new Dotenv(),
    // new EnvironmentPlugin([]),
    new NoEmitOnErrorsPlugin(),
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
