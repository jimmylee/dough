'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <header className="header">
        <h1 className="heading">
          Happy Birthday <span className="red">Jimmy</span> &#4113;
        </h1>
        <span className="font-menlo text-small">
          For your birthday this year, I decided to give you 24 hours of art and animation.
        </span>
      </header>
    );
  }
});
