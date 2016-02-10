'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers/index';

import middleware from './utilities/middleware';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import base from './components/base';
import pageOne from './pages/one';
import pageTwo from './pages/two';
import pageNotFound from './pages/not-found';

const store = middleware.createStore(reducers);

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React;
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ middleware.history }>
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
