const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/Program.ts',
    output: {
        path: `${ path.resolve('__dirname', '../../wwwroot') }/js`,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js', '.json'
        ]
    }
};

