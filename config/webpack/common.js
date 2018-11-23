const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();

module.exports = env => {
  const environment =
    env && env.NODE_ENV ? env.NODE_ENV.toLocaleLowerCase() : 'development';
  return {
    entry: {
      // polyfills: path.resolve(__dirname, './polyfills.js'),
      main: [
        'react-hot-loader/patch',
        'babel-polyfill',
        path.resolve(__dirname, '../../src/index.tsx')
      ]
      // sw: path.resolve(__dirname, '../../src/sw.js'),
    },
    devtool: environment === 'development' ? 'cheap-source-map' : false,
    plugins: [
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, '../../assets/logo.png'),
        prefix: 'icons/[hash]/',
        emitStats: false,
        statsFilename: 'icons/stats-[hash].json',
        persistentCache: true,
        inject: true,
        background: '#fff',
        title: 'Antonios & Stephanie Wedding',
        // @see https://github.com/haydenbleasel/favicons#usage
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: false
        }
      }),
      new Dotenv({
        path: path.resolve(__dirname, '../../.env'),
        safe: true,
        systemvars: true
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../../dist')
    },
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
      alias: {
        Assets: path.resolve(__dirname, '../assets/'),
        Actions: path.resolve(__dirname, '../../src/actions/'),
        Components: path.resolve(__dirname, '../../src/components/'),
        Constants: path.resolve(__dirname, '../../src/constants/'),
        Containers: path.resolve(__dirname, '../../src/containers/'),
        Helpers: path.resolve(__dirname, '../../src/helpers/'),
        Reducers: path.resolve(__dirname, '../../src/reducers/'),
        ReduxLogger$:
          environment !== 'production'
            ? 'redux-logger'
            : path.resolve(__dirname, '../../src/helpers/empty.ts'),
        ReduxDevtoolsExtension$:
          environment !== 'production'
            ? 'redux-devtools-extension'
            : path.resolve(__dirname, '../../src/helpers/empty.ts')
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /(node_modules|assets|reports)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        browsers: ['> 5%', 'last 2 versions']
                      }
                    }
                  ],
                  '@babel/preset-typescript',
                  '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/'
              }
            }
          ]
        }
      ]
    }
  };
};
