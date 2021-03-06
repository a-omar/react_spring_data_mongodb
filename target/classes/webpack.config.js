const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './static/js/';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        stats: { modules: false },
        entry: { 'main': './clientApp/app.tsx' },
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
//            publicPath: ''
        },
        module: {
            rules: [
                { test: /\.tsx?$/ , include: /clientApp/, use: 'awesome-typescript-loader?silent=true' },
                { test: /\.css$/, use: isDevBuild ? ['style-loader', 'css-loader'] : ExtractTextPlugin.extract({ use: 'css-loader?minimize' }) },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        },
        plugins: [
            new CheckerPlugin()
            // new webpack.DllReferencePlugin({
            //     context: __dirname,
            //     manifest: require('./wwwroot/dist/vendor-manifest.json')
            // })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.UglifyJsPlugin(),
//            new ExtractTextPlugin('/css/main.css')
        ])
    }];
};
//var path = require('path');
//
//module.exports = {
//    entry: './clientApp/app.tsx',
//    devtool: 'sourcemaps',
//    cache: true,
//    debug: true,
//    output: {
//        path: __dirname,
//        filename: './src/main/resources/static/js/bundle.js'
//    },
//    module: {
//        loaders: [
//            {
//                test: path.join(__dirname, '.'),
//                exclude: /(node_modules)/,
//                loader: 'awesome-typescript-loader?silent=true',
//                query: {
//                    cacheDirectory: true,
//                    presets: ['es2015', 'react']
//                }
//            }
//        ]
//    }
//};