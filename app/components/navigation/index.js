'use strict';

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        const navigationClass = classNames('navigation');
        const navigationLinkClass = classNames('navigation--link');

        return (
            <nav className={ navigationClass }>
                <Link className={ navigationLinkClass }
                      to="/i-love-kathy">
                      View 404
                </Link>
                <Link className={ navigationLinkClass }
                      to="/">
                      View Giphy Feed
                </Link>
                <Link className={ navigationLinkClass }
                      to="/your-cards">
                      View Your Picks
                </Link>
            </nav>
        );
    }
});
