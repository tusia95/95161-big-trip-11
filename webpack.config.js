
const path = require(`path`);
const publicDirPath = path.join(__dirname, `public`);
module.exports = {
  mode: `development`, // режим сборки
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: publicDirPath,
  },
  devtool: `source-map`,
  devServer: {
    contentBase: publicDirPath,
    watchContentBase: true,
    // publicPath: `http://localhost:8080/`,
    compress: true
  }
};
