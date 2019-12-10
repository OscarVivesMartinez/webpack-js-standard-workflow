// const think = { cosa: 1, cosa2: 2, cosa3: 3 };
// console.log(think);

module.exports = {
    mode: 7,
    devtool: 6,
    entry: 'src/index.jsx',
    output: {
        path: 'dist',
        filename: '[name].[hash].js',
    },
    devServer: {
        port: 5000,
        hot: true,
        contentBase: 'dist',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader'],
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['ts-loader'],
        },
        ],
    },
}
