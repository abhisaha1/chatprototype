const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "../css/style.css"
});

module.exports = {
    devtool: "source-map",
    entry: {
        src: ["./src/client"]
    },
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "[name]-bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: "'production'"
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        extractSass
    ],
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                include: path.join(__dirname, "src")
            },
            // CSS
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                    publicPath: path.join(__dirname, "public/css")
                }),
                include: path.join(__dirname, "public/scss")
            }
        ]
    }
};
