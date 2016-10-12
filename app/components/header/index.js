'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <header className="header">
        <h1 className="heading">
          Happy Birthday <span className="red">Jimmy</span> <span className="red">&#x2665;</span>
        </h1>
        <p className="font-menlo text-small">
          For your <span className="red">28th</span> birthday this year, I decided to give you an excessively long digital letter forked from <a href="https://github.com/meanjim/dough">your own repository</a>. I wrote some shit CSS on this app and filled it with 28 drawings and animations of happy things. It will be happier if you do not look at the source code ￣▽￣
        </p>
      </header>
    );
  }
});
