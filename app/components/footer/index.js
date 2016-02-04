'use strict';

import React from 'react';
import classNames from 'classnames';

const Footer = React.createClass({
    render() {
        const footerClass = classNames('footer');
        const footerLinkClass = classNames('footer--link');

        return (
            <footer className={ footerClass }>
                MIT license with images provided by the Giphy API
                - <a className={ footerLinkClass }
                     href='https://github.com/meanJim/dough'>
                    Clone me on Github
                </a>
            </footer>
        );
    }
});

export default Footer;
