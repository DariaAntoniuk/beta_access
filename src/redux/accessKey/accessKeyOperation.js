import { accessKeyActions } from './index';

import simulateAsync from 'utils/simulateAsync';

const checkAccessKey = accessKey => dispatch => {
    dispatch(accessKeyActions.ACCESS_KEY_REQUEST);

    simulateAsync(accessKey)
        .then(response => {
            dispatch(accessKeyActions.accessKeySuccess(response));
        })
        .catch(error => {
            dispatch(accessKeyActions.accessKeyError(error));
        });
};

export default {
    checkAccessKey,
};
