import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { reduxReducers } from './reducers/index';
import { reduxMiddleware } from './utilities/middleware';

import Base from './components/base/index';
import OneExamplePage from './pages/one/index';
import TwoExamplePage from './pages/two/index';
import NotFoundPage from './pages/not-found/index';

const store = reduxMiddleware.createStore(reduxReducers);

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React;
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ reduxMiddleware.history }>
      <Route path="/" component={ Base }>
        <IndexRoute component={ OneExamplePage } />
        <Route path="one" component={ OneExamplePage } />
        <Route path="two" component={ TwoExamplePage } />
        <Route path="*" component={ NotFoundPage } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
