import React from 'react';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render() {
    const {title, description} = this.props;

    return (
      <header className="menu-item">
        <strong className="menu-item-title" children={title} />
        <dfn className="menu-item-description" children={description} />
      </header>
    );
  }
});
