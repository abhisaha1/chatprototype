import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Match, Miss } from "react-router";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/createStore";
import { AppContainer } from "react-hot-loader";
import Home from "./containers/Home";
import App from "./containers/App";
import "babel-polyfill";
import routes from "./routes";

const render = App => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App routes={routes} initialData={window.__INITIAL_STATE__} />
            </Provider>
        </BrowserRouter>,
        document.getElementById("app")
    );
};
render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
    const NextApp = require("./containers/App").default;
    render(NextApp);
}
