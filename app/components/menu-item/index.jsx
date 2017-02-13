import React from 'react';

export default class MenuItem extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string
  };

  render() {
    return (
      <header className="menu-item">
        <strong className="menu-item-title" children={this.props.title} />
        <dfn className="menu-item-description" children={this.props.description} />
      </header>
    );
  }
}
