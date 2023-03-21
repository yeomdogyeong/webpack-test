const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "docs"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: [
        //       ["@babel/preset-env"],
        //       ["@babel/preset-react", { runtime: "automatic" }],
        //     ],
        //   },
        // },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "docs"), //dist -> docs로 변경
    },
    port: 3001,
  },
};
