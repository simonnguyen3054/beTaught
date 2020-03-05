const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/" //specify the base path for all the assets within application.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // Rules to load scss
      {
        test: /\.scss$/i, //regex - looking file ends with scss
        use: [
          "style-loader", //3 inject styles into dom
          "css-loader", //2. turn css into commonjs
          "sass-loader" //1. turn sass into css
        ]
      },
      //Rules to load file
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true //will redirect 404s to /index.html
  }
};
