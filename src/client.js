import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
// import browserHistory from "history/lib/createBrowserHistory";
import routes from "./routes";
import store from "./redux/createStore";
import "babel-polyfill";
import { AppContainer } from "react-hot-loader";
/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
import App from "./app";

const render = App => {
    ReactDOM.render(<App />, document.getElementById("app"));
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
    const NextApp = require("./app").default;
    render(NextApp);
}
