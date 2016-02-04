'use strict';

import React from 'react';

import Card from '../components/card';
import Placeholder from '../components/placeholder';

import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

const YourCards = React.createClass({
    propTypes: {
        selection: React.PropTypes.array,
        actions: React.PropTypes.object
    },

    removeFromlist(event, id) {
        return this.props.actions.removeFromList(id);
    },

    render() {
        const { selection } = this.props;
        const placeholderText = 'We have nothing to show you.';
        const containerStyle = {
            textAlign: 'left'
        };

        if ( selection.length > 0 ) {
            return (
                <div style={ containerStyle }>
                    { selection.map((item) => {
                        return <Card data={ item }
                                     key={ 'yours-' + item.id }
                                     remove={ this.removeFromlist.bind(this, item.id) } />
                    }) }
                </div>
            );
        } else {
            return (
                <Placeholder text={ placeholderText } />
            );
        }
    }
});

function mapStateToProps(state) {
    return {
        selection: state.rootReducer.selection
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
)(YourCards);
