'use strict';

import React from 'react';

export default React.createClass({
  render() {

    var objDate = new Date("10/11/2009"),
        locale = "en-us",
        month = objDate.toLocaleString(locale, { month: "long" });

    console.log(month);
    // or if you want the shorter date: (also possible to use "narrow" for "O"
    console.log(objDate.toLocaleString(locale, { month: "short" }));

    return (
      <header className="header">
        <span className="header-month">
          This is
        </span>
      </header>
    );
  }
});
