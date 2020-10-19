import accessKeyTypes from './accessKeyActionsTypes';

const ACCESS_KEY_REQUEST = {
    type: accessKeyTypes.ACCESS_KEY_REQUEST,
};
const accessKeySuccess = accessKey => ({
    type: accessKeyTypes.ACCESS_KEY_SUCCESS,
    payload: accessKey,
});
const accessKeyError = error => ({
    type: accessKeyTypes.ACCESS_KEY_ERROR,
    payload: error,
});

export default {
    ACCESS_KEY_REQUEST,
    accessKeySuccess,
    accessKeyError,
};
