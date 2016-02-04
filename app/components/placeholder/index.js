'use strict';

import React from 'react';
import classNames from 'classnames';

export default React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },

    render() {
        const { text } = this.props;

        const placeholderClass = classNames('placeholder', 'animation-shine');

        return (
            <article className={ placeholderClass }>
                { text }
            </article>
        );
    }
});
