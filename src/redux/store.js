import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { accessKeyReducer } from './accessKey';

const rootReducer = combineReducers({
    accessKey: accessKeyReducer,
});

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
