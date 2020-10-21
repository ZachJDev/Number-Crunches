import React, { Component } from 'react'


export default class Timer extends Component {
    render() {
        return (
            <div>
                 <h2>
          {this.props.time}
        </h2>
            </div>
        )
    }
}
