import React, { Component } from 'react'

export default class Video extends Component {
    render() {
        return (
            <div>
                 <iframe
            className={`video ${this.props.mode}`}
            src={this.props.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
            </div>
        )
    }
}
