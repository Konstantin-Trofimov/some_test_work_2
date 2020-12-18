const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: 'script.js'
  }
};