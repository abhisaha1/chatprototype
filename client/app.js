import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import store from './redux/createStore';

const history = createBrowserHistory();

/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/

export default class App extends React.Component {
    render() {
        return <Provider store={store}>
            <Router routes={routes} history={browserHistory} />
        </Provider>;
    }
}
