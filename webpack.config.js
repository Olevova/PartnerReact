const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  // інші налаштування Webpack
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    },
     plugins: [
    new Dotenv()
  ]
  },
};
