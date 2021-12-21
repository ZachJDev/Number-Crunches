import React, {Component} from "react";

class GameOverMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleRestart = () => {
        this.props.restart();
    };

    render() {
        let {solved, timeElapsed, goal} = this.props;
        let message = solved >= goal ? "Great Job!" : "Keep trying!";

        let timeMessage;
        if (timeElapsed >= 60) {
            let mins = Math.floor(timeElapsed / 60);
            let secs = timeElapsed % 60;
            timeMessage = `${mins} minute${mins > 1 ? "s" : ""}${
                secs > 0 ? ` and ${secs} second${secs > 1 ? "s" : ""}` : ""
            }`;
        } else timeMessage = `${timeElapsed} seconds`;
        return (
            <div>
                <h1>{`You solved ${solved} problems in ${timeMessage}!`}</h1>
                <h2>{message}</h2>
                <button className="button" onClick={this.handleRestart}>Try again?</button>
            </div>
        );
    }
}

export default GameOverMessage;
