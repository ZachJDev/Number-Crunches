import React, { Component } from "react";
import Problem from "./Problem";
import Input from "./Input";
import { NormalGame, MultiplicationTables, Zen, Blitz } from "./Modes";

import "./Zen.css";

// signs:["*", "+", "/", "-"]

export default class MathTrainer extends Component {
  constructor(props) {
    super(props);
    this.Game = new Zen(this.props.options);
    this.state = {
      problem: { num1: 0, num2: 0, sign: "" },
      input: "",
      timeLeft: this.Game.hasTimer || !this.Game.practice || this.Game.startTime,
      isGameOver: true,
      problems: [],
    };
  }

  updateProblem = (wasSkipped) => {
    let [num1, num2, sign] = this.Game.getNewProblem();
    let answer;
    if (sign === "/" && num1 !== 0) {
      // Probably can clean this up.
      let h = num1;
      let num3 = num1 * num2;
      answer = num2;
      num1 = num3;
      num2 = h;
    } else {
      answer = this.Game.compute(num1, num2, sign);
    }
    this.setState({
      problem: { num1, num2, answer, sign },
      input: "",
    });
    if (!wasSkipped) {
      this.setState((s) => ({
        timeLeft: s.timeLeft + this.Game.tick,
      }));
    }
  };

  handleInput = (val) => {
    let { num1, num2, sign, answer } = this.state.problem;
    this.setState({ input: val });
    if (this.state.problem.answer == val) {
      this.state.problems.push(`${num1} ${sign} ${num2} = ${answer}`);
      this.updateProblem();
    }
  };
  tickTimer = () => {
    if (this.state.timeLeft > 0) {
      this.setState((s) => ({ timeLeft: s.timeLeft - 1 }));
    } else {
      clearInterval(this.state.timer);
    }
  };
  componentDidMount() {
    this.restart();
  }

  restart = () => {
    this.updateProblem();
    if (this.state.isGameOver && this.Game.hasTimer) {
      this.setState({
        timeLeft: this.Game.startTime,
        timer: setInterval(() => {
          this.tickTimer();
        }, 1000),
      });
    }
  };

  render() {
    return (
      <div>
        <div className="problem-list">
          {this.state.problems.map((p, i) => {
            return (
              <span className={`${this.Game.mode} problem`}>
                {i + 1}: {p}
              </span>
            );
          })}
          <div>
            {!this.Game.hasTimer || this.state.timeLeft > 0 ? (
              <Problem
                mode={this.Game.mode}
                num1={this.state.problem.num1}
                num2={this.state.problem.num2}
                answer={this.state.problem.answer}
                sign={this.state.problem.sign}
                probNum={this.state.problems.length + 1}
              >
                <Input
                  handleInput={this.handleInput}
                  updateProblem={this.updateProblem}
                  input={this.state.input}
                  restart={this.restart}
                  isGameOver={this.state.timeLeft === 0}
                />
              </Problem>
            ) : (
              <h2>Time's Up!</h2>
            )}
          </div>
        </div>
        <h2>{!this.Game.hasTimer || this.state.timeLeft}</h2>
        {this.Game.mode == "Zen" ? (
          <iframe
          className="video Zen"
            src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        ) : null}
      </div>
    );
  }
}
