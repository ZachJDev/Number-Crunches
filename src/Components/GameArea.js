import React, { Component } from 'react'
import GameOverMessage from './GameOverMessage'
import Problem from './Problem'
import ProblemList from './ProblemList'
import Input from './Input'
import Timer from './Timer'

export default class GameArea extends Component {
    handleInput = (val) => {
        this.props.handleInput(val)
    }
    updateProblem =() => {
        this.props.updateProblem(true)
    }
    handleRestart = () => {
        this.props.restart()
    }

    goToOptions = () => {
        this.props.handleOptions()
    }
    render() {
        const {num1, num2, answer, sign} = this.props.problem
        const {input, mode, isGameOver, timeLeft, timeTaken, problems, hasSkip, practice} = this.props
    let timerMessage;
    // I'm not a fan of this nested statement... 
    if(mode !== 'Zen' && !practice) {
      timerMessage = !isGameOver ? (
       <Timer time={timeLeft || timeTaken || 0}/>
      ) : (
        <GameOverMessage
            score={this.props.score || 'blug'}
          solved={problems.length}
          timeElapsed={timeTaken}
          goal={3}
          restart={this.handleRestart}
          goHome={this.handleOptions}
        />
      )
    } else {
        timerMessage = null;
    }
        return (
             <div className="game-area">
            {/* Problem List */}
            {mode === "Zen" ?  <ProblemList mode ={mode} problems={problems}/>
             : null}
            {/* Timer / Message */}
            {timerMessage}
            {/* Problem & Input */}
            {timeLeft > 0 || !isGameOver ? (
              <Problem
                mode={mode}
                num1={num1}
                num2={num2}
                answer={answer}
                sign={sign}
                probNum={problems.length + 1}
              >
                <Input
                  handleInput={this.handleInput}
                  updateProblem={this.updateProblem}
                  input={input}
                  restart={this.handleRestart}
                  hasSkip={hasSkip}
                  isGameOver={timeLeft === 0}
                />
              </Problem>
            ) : null}

            <button
              className="button options-button"
              onClick={this.goToOptions}
            >
              Select a new mode
            </button>
            </div>
        )
    }
}
