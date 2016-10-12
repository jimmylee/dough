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
              <span className="red right">1</span>
            </h4>
            <img className="pic" src="../images/01.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Me vs U</span>
              <span className="red right">2</span>
            </h4>
            <img className="pic" src="../images/02.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Ramen babies</span>
              <span className="red right">3</span>
            </h4>
            <img className="pic" src="../images/03.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">I&#39;m a bear</span>
              <span className="red right">4</span>
            </h4>
            <img className="pic" src="../images/04.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">2 babies</span>
              <span className="red right">5</span>
            </h4>
            <img className="pic" src="../images/05.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Rabbit</span>
              <span className="red right">6</span>
            </h4>
            <img className="pic" src="../images/06.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Sleepy bear</span>
              <span className="red right">7</span>
            </h4>
            <img className="pic" src="../images/07.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Angel teacup</span>
              <span className="red right">8</span>
            </h4>
            <img className="pic" src="../images/08.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Metronome, bitch!</span>
              <span className="red right">9</span>
            </h4>
            <img className="pic" src="../images/09.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Battle commence</span>
              <span className="red right">10</span>
            </h4>
            <img className="pic" src="../images/10.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">MEOW</span>
              <span className="red right">11</span>
            </h4>
            <img className="pic" src="../images/11.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">SUICA</span>
              <span className="red right">12</span>
            </h4>
            <img className="pic" src="../images/12.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Starting to think that 28 is pretty old</span>
              <span className="red right">13</span>
            </h4>
            <img className="pic" src="../images/13.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Porygon Z</span>
              <span className="red right">14</span>
            </h4>
            <img className="pic" src="../images/14.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">;)</span>
              <span className="red right">14</span>
            </h4>
            <img className="pic" src="../images/15.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Whalesprout babies</span>
              <span className="red right">16</span>
            </h4>
            <img className="pic" src="../images/16.gif" />
          </div>
          <div className="cool">
            <p>383 minutes so far! ヾ|*ﾟ∀ﾟ*|ﾉ</p>
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Meow run</span>
              <span className="red right">17</span>
            </h4>
            <img className="pic" src="../images/17.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Backpacking babies</span>
              <span className="red right">18</span>
            </h4>
            <img className="pic" src="../images/18.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">You will get your aquarium</span>
              <span className="red right">19</span>
            </h4>
            <img className="pic" src="../images/19.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Dogu</span>
              <span className="red right">20</span>
            </h4>
            <img className="pic" src="../images/20.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Polar bear joke</span>
              <span className="red right">21</span>
            </h4>
            <img className="pic" src="../images/21.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Bulba garden</span>
              <span className="red right">22</span>
            </h4>
            <img className="pic" src="../images/22.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Bear in the forest</span>
              <span className="red right">23</span>
            </h4>
            <img className="pic" src="../images/23.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">You and fucking final fantasy on mobile</span>
              <span className="red right">24</span>
            </h4>
            <img className="pic" src="../images/24.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Not hyperbeam</span>
              <span className="red right">25</span>
            </h4>
            <img className="pic" src="../images/25.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Liiick</span>
              <span className="red right">26</span>
            </h4>
            <img className="pic" src="../images/26.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Muthafuckin Dewgong</span>
              <span className="red right">27</span>
            </h4>
            <img className="pic" src="../images/27.gif" />
          </div>
          <div className="cool">
            <h4 className="pic-caption">
              <span className="left">Happy birthday I love you</span>
              <span className="red right">28</span>
            </h4>
            <img className="pic" src="../images/28.gif" />
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
