import React, {Component} from 'react'

export default class Input extends Component {

    handleInput = (event) => {
        event.preventDefault();
        this.props.handleInput(event.target.value)
    }
    handleUpdateProblem = () => {
        if(this.props.isGameOver) {
            this.props.restart();
        } else
        this.props.updateProblem(true);
    }

    render() {
        return (
            <div className="input">
            <input
            className="answer"
              type="text"
              onChange={this.handleInput}
              value={this.props.input}
            ></input>
            <button onClick={this.handleUpdateProblem}>{this.props.isGameOver ? 'restart': 'skip'}</button>
          </div>
        )
    }
}