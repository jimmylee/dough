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
            <img className="pic" src="../images/01.gif" />
            <h4 className="pic-caption"><span className="red">33 minutes</span> — Heart explosion</h4>
          </div>
          <div className="cool">
            <img className="pic" src="../images/02.gif" />
            <h4 className="pic-caption"><span className="red">20 minutes</span> — Me vs U</h4>
          </div>
          <div className="cool">
            <img className="pic" src="../images/03.gif" />
            <h4 className="pic-caption"><span className="red">5 minutes</span> — Ramen babies</h4>
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
