import { combineReducers } from 'redux';
import { rootReducer } from './root-reducer';
import { routeReducer } from 'react-router-redux';

export const reduxReducers = combineReducers({
  rootReducer,
  route: routeReducer
});
