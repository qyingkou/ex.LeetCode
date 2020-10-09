const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./main.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8000,
    compress: true,
    hot: true,
    stats: "errors-only",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[contenthash:8].[ext]",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[contenthash:8].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      template: path.resolve(__dirname, "template/normal.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      inject: true,
    }),
  ],
  resolve: {
    alias: {
      "@util": path.resolve(__dirname, "tool/util.js"),
    },
  },
  stats: "errors-only",
};
