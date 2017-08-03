import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menu from './menu';

const rootReducer = combineReducers({
    routing: routerReducer,
    menu,
});

export default rootReducer;
