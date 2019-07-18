const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "public", "main.tsx"),
    lib: path.resolve(__dirname, "src", "public", "lib.tsx")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /.tsx?/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
