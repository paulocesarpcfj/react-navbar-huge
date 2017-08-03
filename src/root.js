import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { store, history } from './store';
import routes from './routes';

export default () => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
);
