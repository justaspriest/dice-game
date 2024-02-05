const path = require('path');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode,
    entry: './src/js/index.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'server', 'js'),
        clean: true,
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'js'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ]
    }
};
