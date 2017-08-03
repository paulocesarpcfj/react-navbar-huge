import configureStore from './configureStore';
import useRouterHistory from './history';

export const { store, history } = configureStore(
    useRouterHistory,
    window.__INITIAL_STATE__ // eslint-disable-line
);

