'use strict';

import React from 'react';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render() {
    const {title, description} = this.props;

    return (
      <header className="menuItem">
        <strong className="menuItem-title" children={title} />
        <dfn className="menuItem-description" children={description} />
      </header>
    );
  }
});
