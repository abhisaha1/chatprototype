/*-------------------------------------------------------------------*
 * This file is responsible for performing the isomorphic javascript
 * rendering which means the code will be executed in the server and
 * then will be passed down to the client
 *-------------------------------------------------------------------*/

import React from "react";
import ReactDOM from "react-dom/server";
import { StaticRouter, Route, ServerRouter } from "react-router";
import { matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import prefetchComponentData from "./utils/prefetchComponentData";
import store from "./redux/createStore";
import Home from "./containers/Home";
import App from "./containers/App";

module.exports = function(req, res) {
    const matches = routes.reduce((matches, route) => {
        const match = matchPath(req.url, route.path, route);
        if (match) {
            matches.push({
                route,
                match,
                promise: route.component.fetchData
                    ? route.component.fetchData(match)(
                          store.dispatch,
                          store.getState()
                      )
                    : Promise.resolve({})
            });
        }
        return matches;
    }, []);

    if (matches.length === 0) {
        res.status(404);
    }
    const promises = matches.map(match => match.promise);
    var bundle = process.env.NODE_ENV == "production"
        ? "/js/client-bundle.js"
        : "/static/client-bundle.js";
    Promise.all(promises).then(
        () => {
            const data = store.getState();
            const context = {};
            const renderedComponent = ReactDOM.renderToString(
                <StaticRouter context={context} location={req.url}>
                    <Provider store={store}>
                        <App routes={routes} initialData={data} />
                    </Provider>
                </StaticRouter>
            );

            if (context.url) {
                res.redirect(context.url);
            } else {
                const HTML = `
                <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet" href="/css/bootstrap-yeti.min.css">
                    <link rel='stylesheet' href='/css/font-awesome.min.css' type='text/css' media='all'/>
                    <link rel="stylesheet" href="/css/style.css">
                  </head>
                  <body id="client">
                    <div id="app">${renderedComponent}</div>
                    <script type="application/javascript">
                       window.__INITIAL_STATE__ = ${JSON.stringify(data)};
                    </script>
                    <script src="${bundle}"></script>

                  </body>
                </html>
            `;
                res.send(HTML);
            }
        },
        error => {
            debugger;
            console.log(error);
            res.json(error);
            //handleError(res, error);
        }
    );
};
