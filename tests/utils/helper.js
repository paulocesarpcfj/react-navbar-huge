import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import reducers from 'reducers';

export const mockStore = (mock) => {
    Object.keys(mock).forEach(key => {
        reducers[key] = () => (mock[key]);
    });

    return createStore(
        combineReducers(reducers),
        applyMiddleware(thunk, promiseMiddleware())
    );
};

export const mountConnected = (component, store) => (
    mount(
        <Provider store={store}>
            {component}
        </Provider>
    )
);
