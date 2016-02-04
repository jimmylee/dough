'use strict';

import React from 'react';
import classNames from 'classnames';

export default React.createClass({
    propTypes: {
        data: React.PropTypes.object,
        add: React.PropTypes.func,
        remove: React.PropTypes.func
    },

    getInitialState() {
        return {
            hover: false
        };
    },

    handleMouseOver() {
        this.setState({
            hover: true
        });
    },

    handleMouseOut() {
        this.setState({
            hover: false
        });
    },

    handleAction() {
        if (this.props.add) {
            return this.props.add(this.props.data.id);
        }
        if (this.props.remove) {
            return this.props.remove(this.props.data.id);
        }
    },

    render() {
        const { data, add, remove } = this.props;

        const cardClass = classNames('card'),
              cardImageClass = classNames('card--image'),
              cardAvatarClass = classNames('card--avatar'),
              cardMetaClass = classNames('card--meta'),
              cardUserLinkClass = classNames('card--user-link'),
              cardImagePreloadClass = classNames('card--preload');

        const gifUrl = (!this.state.hover)
            ? 'url(' + data.images['downsized_still'].url + ')'
            : 'url(' + data.images['downsized'].url + ')';

        const cardImageInlineStyles = {
            backgroundImage: gifUrl
        };

        let imagesToPreload = [
            data.images['downsized_still'].url,
            data.images['downsized'].url
        ];

        let cardAvatarInlineStyles = {
            background: 'rgba(0, 0, 0, 1)'
        };

        let user = {
            name: 'Anonymous User',
            url: 'https://giphy.com'
        };

        if (data.user) {
            cardAvatarInlineStyles = {
                backgroundImage: 'url(' + data.user['avatar_url'] + ')'
            };

            imagesToPreload.push( data.user['avatar_url'] );
            user.url = data.user['profile_url'];
            user.name = data.user['display_name'];
        }

        if (add && this.state.hover) {
            user.name = '"Click gif to add!"';
        } else if (remove && this.state.hover) {
            user.name = '"Click gif to remove!"';
        }

        return (
            <figure className={ cardClass }
                    onMouseOver={ this.handleMouseOver }
                    onMouseOut={ this.handleMouseOut }>
                <div className={ cardImagePreloadClass }>
                    {
                        imagesToPreload.map((item) => {
                            return <img key={item}
                                        src={item} />
                        })
                    }
                </div>

                <div className={ cardImageClass }
                     style={ cardImageInlineStyles }
                     onClick={ this.handleAction } />

                <figcaption className={ cardMetaClass }>
                    <span className={ cardAvatarClass }
                          style={ cardAvatarInlineStyles }></span>

                    <a className={ cardUserLinkClass }
                       href={ user.url }
                       target='_blank' >
                        { user.name }
                    </a>
                </figcaption>
            </figure>
        );
    }
});
