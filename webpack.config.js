module.exports = {
    mode: 'development',
    entry: {
        practice: './src/practice.tsx',
        privacy: './src/privacy.tsx'
    }, output: {
        path: __dirname + '/wwwroot/dist',
        filename: '[name].bundle.js'
    }, optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }, devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }, module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { enforce: 'pre', test: '/\.js$/', loader: 'source-map-loader' },
            { test: /\.(css|less)$/, use: ['style-loader', 'css-loader'] }
        ]
    }
}