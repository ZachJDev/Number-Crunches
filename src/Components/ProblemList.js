import React, { Component } from 'react'

export default class ProblemList extends Component {
    render() {
        return (
                <div className="problem-list">
              {this.props.problems.map((p, i) => {
                return (
                    // I know indexes aren't great for keys, but I think in this case, where the list won't change, it's probably not a problem.
                    //(Famous last words...)
                  <span className={`${this.props.mode} problem`} key={i}>
                    {p}
                  </span>
                );
              })}
            </div>
        )
    }
}
