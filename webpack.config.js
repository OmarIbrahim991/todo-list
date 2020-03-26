const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
      },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
}