const getAccessKey = state => state.accessKey.accessKey;

const isLoading = state => state.accessKey.loading;

const isError = state => state.accessKey.error;

export default {
    getAccessKey,
    isLoading,
    isError,
};
