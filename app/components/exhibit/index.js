'use strict';

import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="exhibit">
        <div className="exhibit-thumbnail"></div>
        <div className="exhibit-thumbnail"></div>
        <div className="exhibit-thumbnail"></div>
        <div className="exhibit-thumbnail"></div>
        <div className="exhibit-thumbnail"></div>
        <div className="exhibit-thumbnail"></div>
        <div className="exhibit-thumbnail"></div>
        <div className="exhibit-thumbnail"></div>
        <div className="exhibit-thumbnail"></div>

        <div className="exhibit-preview mt-6">
          <div className="exhibit-preview-thumbnail">
            <span className="m-2"></span>
          </div>
          <div className="exhibit-preview-heading">
            <a href="#" className="link-dark">Vitality & Verve in the third dimension</a>
          </div>
          <div className="exhibit-preview-description mt-3">
            <a href="#" className="link-dark text-default ls-sm mr-3">Thinkspace</a>
            <span className="grey text-small ls-xs">Jun 2 – Jun 25</span>
            <span className="bg-red white text-small rounded ml-3 px-2 py-1">Ending soon</span>
          </div>
        </div>

        <div className="exhibit-preview mt-6">
          <div className="exhibit-preview-thumbnail">
            <span className="m-2"></span>
          </div>
          <div className="exhibit-preview-heading">
            <a href="#" className="link-dark">Ravi Zupa: The Turmoil of Being</a>
          </div>
          <div className="exhibit-preview-description mt-3">
            <a href="#" className="link-dark text-default ls-sm mr-3">Hashimoto Contemporary</a>
            <span className="grey text-small ls-xs">Jun 2 – Jun 25</span>
            <span className="bg-red white text-small rounded ml-3 px-2 py-1">Ending soon</span>
          </div>
        </div>

      </div>
    );
  }
});
