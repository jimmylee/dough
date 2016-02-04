import { combineReducers } from 'redux';
import { rootReducer } from './root-reducer';
import { routeReducer } from 'react-router-redux';

export default combineReducers({
    rootReducer,
    route: routeReducer
});
