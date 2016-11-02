import React from 'react';
import Header from '../header/index';
import Footer from '../footer/index';
import Navigation from '../navigation/index';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render() {
    const { children } = this.props;

    return (
      <section className="base">
        <section className="base-left">
          <Navigation />
        </section>
        <section className="base-right">
          <Header />
          {children}
          <Footer />
        </section>
      </section>
    );
  }
});
