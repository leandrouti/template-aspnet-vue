const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: 'main.js',
    },

    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader'},
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.css/, use: ['vue-style-loader', 'css-loader']},
        ]
    },
    plugins: [
        //new HtmlWebpackPlugin({
        //    template: 'index.html',
        //}),
        new VueLoaderPlugin(),
    ],

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}