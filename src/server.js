import express from "express";
import serverRendering from "./serverRendering";
import path from "path";
const app = express();

app.use(express.static("public"));

if (process.env.NODE_ENV == "dev") {
    // start a webpack-dev-server
    var webpack = require("webpack");
    var wpConfigFile = "../webpack.config.dev";
    var webpackConfig = require(wpConfigFile);
    var compiler = webpack(webpackConfig);
    app.use(
        require("webpack-dev-middleware")(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        })
    );
    app.use(
        require("webpack-hot-middleware")(compiler, {
            log: console.log,
            path: "/__webpack_hmr",
            heartbeat: 10 * 1000
        })
    );
}

app.get("/api/getData", (req, res) => {
    res.sendFile(path.join(__dirname, "../data", "data.json"));
});

app.use(serverRendering);

let port = 4040;
app.listen(port, function() {
    console.log("====> Client listening on", port);
});
