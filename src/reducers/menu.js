import { FETCH_MENU } from 'actions/menu';

const INITIAL_STATE = {
    items: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${FETCH_MENU}_FULFILLED`: {
            return { ...state, ...action.payload };
        }

        default:
            return state;
    }
};
