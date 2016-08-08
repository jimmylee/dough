'use strict';

import React from 'react';

function getToday() {
  const today = new Date(),
        dd = today.getDate(),
        locale = 'en-us',
        month = today.toLocaleString(locale, { month: 'long' });

  return `${month} ${dd}`;
}

export default React.createClass({
  render() {
    // console.log(today.toLocaleString(locale, { month: "short" }));
    const today = getToday();
    console.log(today);

    return (
      <header className="header">
        <span className="current-date">
          Today is {today}
        </span>
      </header>
    );
  }
});
