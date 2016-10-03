'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

const pageId = 1;

function mapStateToProps(state) {
  return {
    likes: state.rootReducer.likes[pageId]
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign({}, {
    actions: bindActionCreators(actions, dispatch)
  }, routeActions);
}

const pageOne = React.createClass({
  propTypes: {
    likes: React.PropTypes.number,
    actions: React.PropTypes.object
  },

  handleLike: function(){
    const { actions } = this.props;
    return actions.likePostById(pageId);
  },

  render() {
    const { likes } = this.props;
    const likeCount = likes ? likes : 0;

    return (
      <div className="pageOne">
        <center>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Heart explosion</span>
              <span className="red right">33 minutes</span>
            </h4>
            <img className="pic" src="../images/01.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Me vs U</span>
              <span className="red right">20 minutes</span>
            </h4>
            <img className="pic" src="../images/02.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Ramen babies</span>
              <span className="red right">5 minutes</span>
            </h4>
            <img className="pic" src="../images/03.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">I&#39;m a bear</span>
              <span className="red right">27 minutes</span>
            </h4>
            <img className="pic" src="../images/04.gif" />
          </div>
        </center>
      </div>
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(pageOne);
