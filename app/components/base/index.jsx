import React from 'react';
import Header from '../header/index';
import Footer from '../footer/index';
import Navigation from '../navigation/index';

export default class Base extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <section className="base">
        <section className="base-left">
          <Navigation />
        </section>
        <section className="base-right">
          <Header />
          {this.props.children}
          <Footer />
        </section>
      </section>
    );
  }
}
