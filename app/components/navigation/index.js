'use strict';

import React from 'react';
import { Link } from 'react-router';
import MenuItem from '../menu-item';

const links = [
  {url: '/one', title: 'Fraenkel', description: 'this is one'},
  {url: '/two', title: 'Hashimoto Contemporary', description: 'this is two'},
  {url: '/three', title: 'Johansson Projects', description: 'this is three'}
];

export default React.createClass({
  render() {
    const linkElements = links.map((each) => {
      const { url, title, description } = each;
      return (
        <Link to={url} key={url}>
          <MenuItem title={title} description={description} />
        </Link>
      )
    });

    return (
      <nav className="navigation">
        <span className="navigation-heading">Galleries</span>
        {linkElements}
      </nav>
    );
  }
});
