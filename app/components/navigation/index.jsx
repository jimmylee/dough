import React from 'react';
import MenuItem from '../menu-item/index';
import { Link } from 'react-router';

const links = [
  {url: '/one', title: 'one', description: 'this is one'},
  {url: '/two', title: 'two', description: 'this is two'},
  {url: '/three', title: 'three', description: 'this is three'}
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
        {linkElements}
      </nav>
    );
  }
});
