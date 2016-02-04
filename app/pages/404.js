'use strict';

import React from 'react';
import Placeholder from '../components/placeholder';

export default React.createClass({
    render() {
        const placeholderText = 'This page you want, it is not real.';

        return (
            <Placeholder text={ placeholderText } />
        );
    }
});
