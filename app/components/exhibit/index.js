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
            <span className="exhibit-preview-gallery mr-3">Thinkspace</span>
            <span className="exhibit-preview-dates">Jun 2 – Jun 25</span>
          </div>
        </div>
        <div className="exhibit-preview">
          <div className="exhibit-preview-heading">
            Exhibit name
          </div>
          <div className="exhibit-preview-description">
            <span className="exhibit-preview-gallery mr-3">Gallery</span>
            <span className="exhibit-preview-dates">Dates showing</span>
          </div>
        </div>
        <div className="exhibit-preview">
          <div className="exhibit-preview-heading">
            Exhibit name
          </div>
          <div className="exhibit-preview-description">
            <span className="exhibit-preview-gallery mr-3">Gallery</span>
            <span className="exhibit-preview-dates">Dates showing</span>
          </div>
        </div>
      </div>
    );
  }
});
