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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
}
