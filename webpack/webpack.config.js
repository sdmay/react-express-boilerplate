var webpack = require('webpack');
var path = require('path');

var parentDir = path.resolve(__dirname, '/');
console.log(__dirname);

module.exports = {
    entry: `${__dirname}/app/app.js`,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                include: /app/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            },
            
        ]
    },
    output: {
        path: path.resolve(__dirname, './public/'),

        filename: "bundle.js"
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    mode: 'development',
    devtool: "eval-source-map"

}