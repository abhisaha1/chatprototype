var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: {
        client: ["webpack-hot-middleware/client", "./src/client"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name]-bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"dev"'
            }
        }),
        // enable HMR globally
        new webpack.NamedModulesPlugin()
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    }
};
