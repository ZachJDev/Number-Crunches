import React, { Component } from "react";
import Options from "./Options";
import MathTrainer from "./MathTrainer";

import './StartPage.css'

export default class BasicTrainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: true,
      options: {},
    };
  }
  handleOptions = (options) => {
    this.setState({ isGameOver: false, options });
  };
  handleRestart =() => {
    this.setState({isGameOver: true, options : {}})
  }
  render() {
    const titleClass = (this.state.options.mode === 'Zen') ? 'title hidden' : 'title';
    return (

       <div>
       <h1 className={titleClass}>Online Mental Math Trainer</h1>
        {this.state.isGameOver ? (
          <Options handleOptions={this.handleOptions} />
        ) : (
         <MathTrainer options={this.state.options} handleRestart={this.handleRestart} />
        )}
      </div> 
    );
  }
}
