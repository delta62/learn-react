const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Required
            inject: false,
            template: require('html-webpack-template'),
            // Optional
            title: 'Learn React',
            appMountId: 'app'
        })
    ]
}
