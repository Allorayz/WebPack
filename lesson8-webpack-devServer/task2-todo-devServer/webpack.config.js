const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";
    const config = {
        entry: "./src/index.js",
        output: {
            filename: "./bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(jpg|png)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 8192,
                                name: "[name].[ext]",
                                outputPath: "images",
                            },
                        },
                    ],
                },
                {
                    test: /\.js$/,
                    use: ["babel-loader"],
                },
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),
        ],
        devServer: {
            port: 9000,
            hot: true,
        },
    };

    if (isProduction) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: "[name].css",
            })
        );
    }

    return config;
};