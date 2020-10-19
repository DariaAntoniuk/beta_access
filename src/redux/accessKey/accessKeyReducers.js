import { combineReducers } from 'redux';

import accessKeyTypes from './accessKeyActionsTypes';

const accessKey = (state = null, action) => {
    switch (action.type) {
        case accessKeyTypes.ACCESS_KEY_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

const loading = (state = false, action) => {
    switch (action.type) {
        case accessKeyTypes.ACCESS_KEY_REQUEST:
            return true;

        case accessKeyTypes.ACCESS_KEY_SUCCESS:
        case accessKeyTypes.ACCESS_KEY_ERROR:
            return false;

        default:
            return state;
    }
};

const error = (state = '', action) => {
    switch (action.type) {
        case accessKeyTypes.ACCESS_KEY_ERROR:
            return action.payload;

        case accessKeyTypes.ACCESS_KEY_REQUEST:
        case accessKeyTypes.ACCESS_KEY_SUCCESS:
            return '';

        default:
            return state;
    }
};

export default combineReducers({
    accessKey,
    loading,
    error,
});
