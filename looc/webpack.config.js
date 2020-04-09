module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
};
