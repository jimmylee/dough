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
          <span className="exhibit-preview-heading">
            Vitality & Verve in the third dimension
          </span>
          <span className="exhibit-preview-thumbnail-item"></span>
          <span className="exhibit-preview-thumbnail-item"></span>
          <span className="exhibit-preview-thumbnail-item"></span>
          <div className="exhibit-preview-description">
            <span className="dark text-default medium ls-sm mr-3">Thinkspace</span>
            <span className="grey text-small ls-xs">Jun 2 – Jun 25</span>
          </div>
        </div>
        <div className="exhibit-preview mt-6">
          <span className="exhibit-preview-heading">
            Summer Group Show 2016
          </span>
          <div className="exhibit-preview-description">
            <span className="dark text-default medium ls-sm mr-3">Hashimoto Contemporary</span>
            <span className="grey text-small ls-xs">Jun 2 – Jun 25</span>
          </div>
        </div>
        <div className="exhibit-preview mt-6">
          <span className="exhibit-preview-heading">
            Exhibit Title
          </span>
          <span className="exhibit-preview-thumbnail-item"></span>
          <div className="exhibit-preview-description">
            <span className="dark text-default medium ls-sm mr-3">Gallery</span>
            <span className="grey text-small ls-xs">Show dates</span>
          </div>
        </div>
      </div>
    );
  }
});
