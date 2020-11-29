const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    output: {
        path: path.resolve(__dirname, "public"),
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:png|jpg|gif|svg)$/i,
                loader: 'file-loader',
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets/images", to: "assets/images" },
            ],
        })
    ]
}