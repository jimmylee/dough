'use strict';

import React from 'react';

import Card from '../components/card';
import Placeholder from '../components/placeholder';

import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

const ImagesPage = React.createClass({
    propTypes: {
        collection: React.PropTypes.array,
        actions: React.PropTypes.object,
        failure: React.PropTypes.string
    },

    addToList(event, id) {
        return this.props.actions.addToList(id);
    },

    render() {
        const { collection, failure } = this.props;
        const placeholderText = (failure) ? failure : 'Loading...';
        const containerStyle = {
            textAlign: 'left'
        };

        if (collection.length > 0) {
            return (
                <div style={ containerStyle }>
                    { collection.map((item) => {
                        return <Card data={ item }
                                     key={ 'collection-' + item.id }
                                     add={ this.addToList.bind(this, item.id) } />
                    }) }
                </div>
            );
        } else {
            return (
                <Placeholder text={ placeholderText } />
            )
        }
    }
});

function mapStateToProps(state) {
    return {
        collection: state.rootReducer.collection,
        failure: state.rootReducer.failure
    };
}

function mapDispatchToProps(dispatch) {
    return Object.assign({}, {
        actions: bindActionCreators(actions, dispatch)
    }, routeActions);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImagesPage);
