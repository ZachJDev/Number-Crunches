import React, { Component } from "react";
import GameArea from "./GameArea";
import GameMode from "./Modes";
import Video from "./Video";

import "./MathTrainer.css";
import "./Zen.css";
class MathTrainer extends Component {
  constructor(props) {
    super(props);
    // This little hack keeps the trainer working correctly if the page is refreshed.
    const options =
      this.props.options.length > 0
        ? this.props.options
        : this.props.history.location.state.options;
    this.Game = GameMode.newGame(options);
    this.state = {
      practice: this.Game.practice,
      problem: { num1: 0, num2: 0, sign: "" },
      input: "",
      timeLeft:
        this.Game.hasTimer || !this.Game.practice || this.Game.startTime,
      isGameOver: true,
      problems: [],
      preGameTime: 3,
    };
  }

  updateProblem = (wasSkipped) => {
    let [num1, num2, sign] = this.Game.getNewProblem();
    let answer;
    if (sign === "/" && num1 !== 0) {
      // Probably can clean this up.
      // This has to be here (and not in the GameMode methods) because it overrides the generated problem.
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
        timeLeft: s.timeLeft + this.Game.bonus,
      }));
    }
  };

  handleInput = (val) => {
    let { num1, num2, sign, answer } = this.state.problem;
    this.setState({ input: val });
    // It's been like a month since I wrote this line, and now I'm wishing I'd learned TypeScript...
    // eslint-disable-next-line
    if (this.state.problem.answer == val) { 
      this.setState(
        {
          problems: [
            ...this.state.problems,
            `${num1} ${sign} ${num2} = ${answer}`,
          ],
        },
        () => {
          if (!this.Game.isFinished(this.state.problems.length)) {
            if (this.state.problems.length % 5 === 0) {
              // I may want to abstract the threshold into the Mode classes.
              this.Game.increaseChallenge();
            }
            this.updateProblem();
          } else {
            this.endGame();
          }
        }
      );
    }
  };
  endGame = () => {
    clearInterval(this.state.timerTimeLeft);
    clearInterval(this.state.timerTimeTaken);
    this.setState((s) => ({
      isGameOver: true,
      timeLeft: 0,
      timeTaken: s.timeTaken + 1, // The timeLeft timer doesn't actually count all the way to 0, so this little addition gets the last second.
    }));
  };
  tickTimer = () => {
    // This feels pretty hacky to me, will probably want to clean up later.
    if (this.state.timeLeft > 1) {
      this.setState((s) => ({
        timeLeft: s.timeLeft - 1,
      }));
    } else if (this.state.timeLeft === 1) {
      this.endGame();
    }
  };

  restart = () => {
    this.updateProblem();
    this.setState({ isGameOver: false, problems: [] });
    if (this.Game.hasTimer) {
      this.setState({
        timeLeft: this.Game.startTime,
        timeTaken: 0,
        timerTimeLeft: setInterval(() => {
          this.tickTimer();
        }, 1000),
        timerTimeTaken: setInterval(() => {
          this.setState((s) => ({
            timeTaken: s.timeTaken + 1,
          }));
        }, 1000),
      });
    }
  };

  goToOptions = () => {
    this.props.handleRestart();
    this.props.history.push("/Math-Trainer/options", { isGameOver: true });
  };

  componentDidMount() {
    // Goes right into the Game if it's Zen, else starts the pregame timer
    if (this.Game.mode === "Zen") {
      this.restart();
    } else {
      this.setState({
        timerPreGame: setInterval(() => {
          this.setState((s) => ({ preGameTime: s.preGameTime - 1 }));
          if (this.state.preGameTime < 1) {
            this.restart();
            clearInterval(this.state.timerPreGame);
          }
        }, 1000),
      });
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.timerTimeLeft);
    clearInterval(this.state.timerTimeTaken);
  }
  render() {
    return (
      <div className={`${this.Game.mode}`}>
        {/* PreGame timer / game area */}
        {this.Game.mode !== "Zen" && this.state.preGameTime > 0 ? (
          <h2 className="pre-timer">{this.state.preGameTime}</h2>
        ) : (
          <GameArea
            {...this.state}
            hasSkip={this.Game.hasSkip}
            mode={this.Game.mode}
            updateProblem={this.updateProblem}
            handleInput={this.handleInput}
            handleOptions={this.goToOptions}
            restart={this.restart}
          />
        )}
        {/* Video */}
        {this.Game.mode === "Zen" ? (
          <Video
            url={"https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"}
            mode={this.Game.mode}
          />
        ) : null}
      </div>
    );
  }
}

export default MathTrainer;
