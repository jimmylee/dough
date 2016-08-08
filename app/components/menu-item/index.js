'use strict';

import React from 'react';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render() {
    const {title} = this.props;

    return (
      <header className="menuItem">
        <text className="menuItem-title" children={title} />
      </header>
    );
  }
});
