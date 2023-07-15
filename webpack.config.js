const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = function () {
    const {module, moduleName} = process.env
    const basePath = path.resolve(__dirname, module)
    return {
        mode: 'none',
        entry: `${basePath}/src`,
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, 'dist')
        },
        devtool: "source-map",
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        module: {
            rules: [
                {test: /\.ts$/, loader: 'ts-loader'},
                {test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: "./assets/index.html",
                filename: "index.html",
                moduleName,
                HTML_PATH: path.resolve(basePath, 'src')
            }),
            new CopyPlugin({
                patterns: [
                    {from: 'assets', to: './assets'},
                ],
            }),
        ]
    }
}
