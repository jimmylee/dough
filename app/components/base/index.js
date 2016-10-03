'use strict';

import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render() {
    const { children } = this.props;

    return (
      <section className="base">
        <section>
          <Header />
          {children}
          <Footer />
        </section>
      </section>
    );
  }
});
