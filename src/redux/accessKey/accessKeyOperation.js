import { accessKeyActions } from './index';

import useAsyncSimulate from 'utils/useSimulateAsync';

const checkAccessKey = accessKey => dispatch => {
    dispatch(accessKeyActions.ACCESS_KEY_REQUEST);

    useAsyncSimulate(accessKey)
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
