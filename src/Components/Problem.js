import React, { Component } from "react";

import './Problem.css'
export default class Problem extends Component {

  render() {
    let {num1, num2, sign, probNum, mode} = this.props
    return (
      <div className={` ${mode} problem-wrap`}>
      <div className={` problem`}>
        <span>
        {num1} {sign} {num2} = 
        </span>
      </div>
        {this.props.children}
      </div>
    );
  }
}
