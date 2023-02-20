const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./src/index.tsx", // main js
  output: {
    filename: 'webpack.bundle.js',
    path: path.resolve(__dirname, "dist"), // output folder
    publicPath: "/",
  },

  devServer: {
    port: 3000,
  },

  resolve: {
    extensions: [".ts", ".tsx",".js", ".css"],
},
  
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
      { test: /\.txt$/, use: 'raw-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // base html
      filename: "./index.html"
    }),
  ],
};