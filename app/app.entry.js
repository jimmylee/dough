import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { reduxReducers } from './reducers/index';
import { reduxMiddleware } from './utilities/middleware';

import base from './components/base/index';
import pageOne from './pages/one/index';
import pageTwo from './pages/two/index';
import pageNotFound from './pages/not-found/index';

const store = reduxMiddleware.createStore(reduxReducers);

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React;
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ reduxMiddleware.history }>
      <Route path="/" component={ base }>
        <IndexRoute component={ pageOne } />
        <Route path="one" component={ pageOne } />
        <Route path="two" component={ pageTwo } />
        <Route path="*" component={ pageNotFound } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
