'use strict';

import React from 'react';
import classNames from 'classnames';
import Navigation from '../navigation';

export default React.createClass({
    render() {
        const headerClass = classNames('header');
        const subtitleClass = classNames('header--subtitle');

        return (
            <header className={headerClass}>
                <strong>Dough</strong>

                <dfn className={subtitleClass}>
                    Starter Project for React, Redux, React-Router, SASS, Gulp + Browserify
                </dfn>

                <Navigation />
            </header>
        );
    }
});
