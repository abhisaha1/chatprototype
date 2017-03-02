import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import App from './app';

render(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        const nextApp = require('./app').default;
        render(nextApp);
    });
}

function render(App) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}