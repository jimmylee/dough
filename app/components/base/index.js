'use strict';

import React from 'react';
import Header from '../header';
import Footer from '../footer';

import classNames from 'classnames';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

const BasePage = React.createClass({
    propTypes: {
        children: React.PropTypes.element,
        actions: React.PropTypes.object,
        hasData: React.PropTypes.bool
    },

    handleFetchData() {
        this.props.actions.fetchData();
    },

    componentDidMount() {
        if (!this.props.hasData) {
            this.handleFetchData();
        }
    },

    render() {
        const { children } = this.props;

        const baseChildrenClass = classNames('base--children');
        const baseClass = classNames('base');

        return (
            <section className={ baseClass }>
                <Header />
                    <section className={ baseChildrenClass }>
                        {children}
                    </section>
                <Footer />
            </section>
        );
    }
});

function mapStateToProps(state) {
    return {
        hasData: state.rootReducer.hasData
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
)(BasePage);
