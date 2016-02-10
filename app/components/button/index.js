'use strict';

import React from 'react';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    onClick: React.PropTypes.func
  },

  render() {
    const { children, onClick } = this.props;

    return (
      <button className="button"
        onClick={onClick}>
        {children}
      </button>
    );
  }
});
