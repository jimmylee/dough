import React from 'react';

export default class Button extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    onClick: React.PropTypes.func
  };

  render() {
    return (
      <button className="button"
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
};
