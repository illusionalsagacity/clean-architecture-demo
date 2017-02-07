import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const PRODUCTION = process.env.NODE_ENV === "production";

let PATHS = {};

PATHS.src = path.resolve(__dirname, "src");
PATHS.dist = path.resolve(__dirname, "dist");
PATHS.entry = path.resolve(PATHS.src, "index");

const PORT = 8000;
const DEV_SOURCES = ["webpack/hot/dev-server", `webpack-dev-server/client?http://localhost:${PORT}`];

const generateEntrySources = (sources) => !PRODUCTION ? DEV_SOURCES.concat(sources) : sources;

module.exports = {
  entry: [PATHS.entry],

  output: {
    path: PATHS.dist,
    chunkFilename: PRODUCTION ? "[id]-[chunkhash].chunk.js" : "[id].chunk.js",
    filename: PRODUCTION ? "[name]-[chunkhash].bundle.js" : "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [ PATHS.src ],
        exclude: [ path.resolve(__dirname, "node_modules") ],
        use: [ "babel-loader" ],
      },
    ],
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src"),
    ],

    extensions: [ ".js", ".jsx", ".css", ".json" ],
  },

  devServer: {
    hot: true,
    port: PORT,
  },

  devtool: "source-map",

  target: "web",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Clean Architecture Demo",
      template: path.resolve(PATHS.src, "template.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

};
