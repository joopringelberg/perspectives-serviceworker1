const path = require("path");

module.exports = {
  entry: {
    serviceworker: "./src/service.js"
  },
  output: {
    library: 'perspectives-[name]',
    filename: 'perspectives-[name].js',
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd"
  },
  watch: false,
  mode: "development",
  target: "webworker",
  module: {
    rules: [{
        test: /.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }]
  }
};
