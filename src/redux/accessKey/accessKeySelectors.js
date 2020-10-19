const getAccessKey = state => state.accessKey.accessKey;

const isLoading = state => state.accessKey.loading;

const getError = state => state.accessKey.error;

export default {
    getAccessKey,
    getError,
    isLoading,
};
