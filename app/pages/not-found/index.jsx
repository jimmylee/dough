import React from 'react';
import Button from '../../components/button/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

function mapStateToProps(state) {
  return {
    gifs: state.rootReducer.gifs
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign({}, {
    actions: bindActionCreators(actions, dispatch)
  });
}

class NotFoundPage extends React.Component {
  static propTypes = {
    gifs: React.PropTypes.array,
    actions: React.PropTypes.object
  };

  handleGetJSON = () => {
    return this.props.actions.fetchData();
  }

  render() {
    const gifElements = this.props.gifs.map((each) => {
      const { url, images } = each;
      return <img key={url} src={images.downsized.url} />;
    });

    return (
      <div className="pageNotFound">
        <h1>NOT FOUND</h1>

        <Button onClick={() => {this.handleGetJSON()}}>
          Clicking this button will get JSON randomly from Giphy as a test.
        </Button>

        {gifElements}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFoundPage);
