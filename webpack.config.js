const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    entry: "./src/test.js",
    output: {
        path: path.resolve(__dirname, "./public/stylesheets"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
}
