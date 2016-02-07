module.exports = {
  context: __dirname + "/public/javascripts",
    entry: "./app",
  output: {
  path: __dirname + "/public/javascripts",
    filename: "bundle.js"
  },
  devtool: "#inline-source-map",
  watch:true
};