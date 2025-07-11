const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './app/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    devServer: {
        port: 8800,
        open: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
}