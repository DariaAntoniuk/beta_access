import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { accessKeyReducer } from './accessKey';

const accessKeyConfig = {
    key: 'accessKey',
    storage,
    whitelist: ['accessKey'],
};

const rootReducer = combineReducers({
    accessKey: persistReducer(accessKeyConfig, accessKeyReducer),
});

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export const persistor = persistStore(store);
