import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './rootReducer';

const middlewares = [thunk , logger ];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
