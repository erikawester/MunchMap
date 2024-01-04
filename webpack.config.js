//create a path, a native NodeJS module to help in the joining of files
const path = require("path");
//access the html-webpack-plugin
const HTMLWebpackPlugin = require("html-webpack-plugin");

//tell webpack where to start bundling the files by specifying an entry point
module.exports = {
  entry: "./src/index.js",
  //where the code gets bundled for use in the production environment
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  stats: {
    children: true,
  },
  //apply array of rules for each module
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        //inserting this to try and make sure covered for js and jsx syntax
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //helps when frontend and backend are separate during development
  //paths starting with api will be forwarded to localhost:3000
  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname),
      publicPath: "/",
    },
    proxy: {
      "/api": "http://localhost:3000",
      "/addRestaurant": "http://localhost:3000",
    },
  },
  //plugin takes index.html and injects script tag into it. moves html file into the dist folder
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
