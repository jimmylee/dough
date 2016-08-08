'use strict';

import React from 'react';
import Button from '../../components/button';
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
        <div className="exhibit-thumbnail">
        </div>
        <div className="exhibit-thumbnail">
        </div>
        <div className="exhibit-thumbnail">
        </div>
        <div className="exhibit-thumbnail">
        </div>

        <p>
          The Red Mage is the classic jack of all trades, a profession whose versatility stands in stark contrast to the regimented, often restrictive training of other Mage Jobs. Indeed, rather than keeping their studies confined to a single school of magic, these versatile spellcasters satisfy curiosity by dabbling in a little bit of everything: White Magic, Black Magic, Time Magic, swordsmanship…
        </p>

        <p>
          The quintessential free spirits, Red Mages tend to dress elegantly and flamboyantly, using the romantic idealism of musketeers and swashbucklers as a template. This carries over into their choice of arms; they are particularly adept with bladed weapons, preferring to fight with rapiers, sabres and other weapons that allow them to take full advantage of the additional mobility afforded by their light armor. Though other spellcasters may find Red Mages a little too flighty for their liking, there is no denying that their palette of abilities is a potent one.
        </p>
        <p>
          Aegon olenna meera reed, nights king hot pie ghost obara cersei podrick davos arya. Ros lord of bones varamyr benjen, jaime sansa maester luwin qhorin halfhand alliser thorne eddard loras barristan bronn chett. Victarion jorah stannis hoster tully, gerold hightower viserys brienne rhaegal. Shae aeron mya stone joffrey alliser thorne pate quentyn myrcella lyanna daenerys ygritte hoster tully. Jojen baelor ashara wyman manderly asha arthur dayne summer myrcella catelyn brienne rickon tyrion rhaegal.
        </p>
        <p>
          The quintessential free spirits, Red Mages tend to dress elegantly and flamboyantly, using the romantic idealism of musketeers and swashbucklers as a template. This carries over into their choice of arms; they are particularly adept with bladed weapons, preferring to fight with rapiers, sabres and other weapons that allow them to take full advantage of the additional mobility afforded by their light armor. Though other spellcasters may find Red Mages a little too flighty for their liking, there is no denying that their palette of abilities is a potent one.
        </p>
        <p>
          Aegon olenna meera reed, nights king hot pie ghost obara cersei podrick davos arya. Ros lord of bones varamyr benjen, jaime sansa maester luwin qhorin halfhand alliser thorne eddard loras barristan bronn chett. Victarion jorah stannis hoster tully, gerold hightower viserys brienne rhaegal. Shae aeron mya stone joffrey alliser thorne pate quentyn myrcella lyanna daenerys ygritte hoster tully. Jojen baelor ashara wyman manderly asha arthur dayne summer myrcella catelyn brienne rickon tyrion rhaegal.
        </p>
        <p>
          The quintessential free spirits, Red Mages tend to dress elegantly and flamboyantly, using the romantic idealism of musketeers and swashbucklers as a template. This carries over into their choice of arms; they are particularly adept with bladed weapons, preferring to fight with rapiers, sabres and other weapons that allow them to take full advantage of the additional mobility afforded by their light armor. Though other spellcasters may find Red Mages a little too flighty for their liking, there is no denying that their palette of abilities is a potent one.
        </p>

        <Button onClick={() => {this.handleLike()}}>
          This post has {likeCount} likes.
        </Button>
      </div>
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(pageOne);
