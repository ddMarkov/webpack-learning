const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/js/index.js",
    plugins: [new HtmlWebpackPlugin(
        {
            template: "./src/html/template.html"
        }
        )
    ],
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test:  /\.html$/,
                use: [
                    "html-loader"
                ]
            },
            {
                test: /\.(svg|png|img|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
}
