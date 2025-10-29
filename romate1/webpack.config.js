// Bases
const path = require('path');

// Plugins
const { ModuleFederationPlugin } = require("webpack").container;

// Dependencies
const deps = require('./package.json').dependencies;

// Output Directory
const outputDir = path.resolve(__dirname, '../dist/remote1');

module.exports = {
  entry: './src/bootstrap.js',

  output: {
    filename: 'bootstrap.js',
    path: outputDir,
  },

  devServer: {
    port: 1001,
    static: outputDir,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './remoteModule': './src/exposes.js',
      },
      shared: {
        lodash: { 
          singleton: true,
          requiredVersion: deps.lodash,
        }
      },
    }),
  ],
};