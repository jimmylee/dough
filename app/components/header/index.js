'use strict';

import React from 'react';

export default React.createClass({
  render() {

    var today = new Date(),
        dd = today.getDate(),
        locale = "en-us",
        month = today.toLocaleString(locale, { month: "long" });

    if(dd < 10) {
      dd='0'+dd
    }

    today = month + ' ' + dd

    console.log(today);
    // console.log(today.toLocaleString(locale, { month: "short" }));

    return (
      <header className="header">
        <span className="header-month">
          This is
        </span>
      </header>
    );
  }
});
