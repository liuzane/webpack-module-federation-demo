// Bases
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Dependencies
const deps = require('./package.json').dependencies;

// Output Directory
const outputDir = path.resolve(__dirname, '../dist');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,

    entry: './src/main.js',

    output: {
      filename: 'main.js',
      path: outputDir,
    },

    devServer: {
      port: 1000,
      static: outputDir,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),

      new ModuleFederationPlugin({
        name: 'host',
        remotes: argv.mode === 'development' ? {
          remote1: 'remote1@http://localhost:1001/remoteEntry.js',
          remote2: 'remote2@http://localhost:1002/remoteEntry.js',
        } : {
          remote1: 'remote1@https://liuzane.github.io/webpack-module-federation-demo/remote1/remoteEntry.js',
          remote2: 'remote2@https://liuzane.github.io/webpack-module-federation-demo/remote2/remoteEntry.js',
        },
        shared: {
          lodash: { 
            singleton: true,
            requiredVersion: deps.lodash,
          }
        },
      }),

      env.analyze && new BundleAnalyzerPlugin(),

      new CleanWebpackPlugin(),
    ],
  }
};