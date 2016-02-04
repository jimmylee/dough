'use strict';

import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';

const reduxRouterMiddleware = syncHistory( browserHistory );

const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunk
)(createStore);

export default {
    createStore: createStoreWithMiddleware,
    history: browserHistory
};
