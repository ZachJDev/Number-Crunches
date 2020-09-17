import React, { Component } from "react";

import './Problem.css'
export default class Problem extends Component {

  render() {
    let {num1, num2, sign, probNum, mode} = this.props
    return (
      <div className={`${mode} problem`}>
        <span>
         {probNum}: {num1} {sign} {num2} = 
        </span>
        {this.props.children}
      </div>
    );
  }
}
