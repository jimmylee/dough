'use strict';

import React             from 'react';
import ReactDOM          from 'react-dom';
import reducers          from './reducers/index';

import middleware from './utilities/middleware';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import base              from './components/base';
import imagesPage        from './pages/images-page';
import yourPage          from './pages/your-cards';
import notFoundPage      from './pages/404';

const store = middleware.createStore(reducers);

if ( process.env.NODE_ENV !== 'production' ) {
    window.React = React;
}

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ middleware.history }>
            <Route path="/" component={ base }>
                <IndexRoute component={ imagesPage }/>
                <Route path="giphy" component={ imagesPage } />
                <Route path="your-cards" component={ yourPage } />
                <Route path="*" component={ notFoundPage } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
