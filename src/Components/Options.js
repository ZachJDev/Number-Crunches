import React, {Component} from "react";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import * as Modes from "./Modes";

import "./Options.css";

let Rules = {};

Object.keys(Modes).forEach((mode) => {
    if (!!Modes[mode].getDefaultRules) {
        // This stops the abstract GameMode class from being added to the list
        let r = Modes[mode].getDefaultRules();
        Rules[r.id] = r;
    }
});

export default class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {mode: "Normal", signs: ["+", "-"], canStart: true};
        Object.assign(this.state, Rules["Normal"]);
        this.radios = [...Object.values(Rules)];
    }

    handleCanStart = (state) => {
        return Number(state.min) <= Number(state.max) && state.signs.length > 0
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.canStart) {
            this.setState({id: this.state.mode});
            this.props.handleOptions(this.state);
        }
    };
    handleChange = (event) => {
        if (event.target.name === "practice") {
            let practice = this.state.practice;
            this.setState({[event.target.name]: !practice});
        } else {
            this.setState({[event.target.name]: event.target.value});
            this.setState(state => {
                return {canStart: this.handleCanStart(state)}
            })
        }

        if (event.target.value === "Multiplication Tables") {
            this.setState({signs: ["×"]});
        }
    };
    handleCheckboxChange = (value) => {
        let signs = this.state.signs;
        if (signs.includes(value)) signs = signs.filter((s) => s !== value);
        else signs.push(value);
        this.setState({signs}, () => {
            this.setState((state) => {
                return {canStart: this.handleCanStart(state)}
            })
        })
    };

    render() {
        // This could have been ternary'd below, but it's already so cluttered, I wanted to put these all up here.
        let practiceEnable = Rules[this.state.mode].hasPractice ? "" : "disabled";
        let numProbsEnable = Rules[this.state.mode].hasNumProbs ? "" : "disabled";
        let startClockEnable = Rules[this.state.mode].hasStartClock ? '' : 'disabled'
        let chooseSignsEnable = Rules[this.state.mode].allowedSigns.length > 1 ? '' : 'disabled'

        let rangeWarning = Number(this.state.min) > Number(this.state.max) ?
            <p>Min must not be higher than max.</p> : '';
        let signWarning = this.state.signs.length === 0 ?
            <p>Must have a sign selected.</p> : '';
        let warningSpan = <div className="warning">{rangeWarning} {signWarning}</div>


        let buttonClasses = "button start-button " + (!this.state.canStart ? 'disabled' : '');

        return (
            <div className="options">
                <form onSubmit={this.handleSubmit} className="options-form">
                    <div className="mode-select">
                        <RadioGroup
                            name="mode"
                            radios={this.radios}
                            handleChange={this.handleChange}
                            checked={this.state.mode}
                            radioClass={"mode"}
                        />
                    </div>

                    <div className="mode-options">
                        <div className="mode-info">
                            <h1 className="mode-title">{this.state.mode}</h1>
                            <div className="mode-desc-box">
                                <p className="mode-desc">{Rules[this.state.mode].description}</p>
                            </div>
                        </div>
                        <div className="mode-options-body">
                            <div className="mode-options-col">
                                <div className="mode-max-min">
                                    <div className="mode-max">
                                        <h2 id="range" className={`form-area-label`}>Range </h2>
                                        <label htmlFor="max">Max:</label>
                                        <input
                                            type="number"
                                            name="max"
                                            value={this.state.max}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="mode-min">
                                        <label htmlFor="min">Min:</label>
                                        <input
                                            type="number"
                                            name="min"
                                            value={this.state.min}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mode-signs">
                                    <h2 className={`${chooseSignsEnable} form-area-label`}>Choose Signs</h2>
                                    <CheckboxGroup
                                        boxes={["+", "-", "×", "/"]}
                                        checked={this.state.signs}
                                        handleChange={this.handleCheckboxChange}
                                        enabledList={Rules[this.state.mode].allowedSigns}
                                    />
                                </div>

                                <div>
                                    <h2 className={`${numProbsEnable} form-area-label`}>Number of Problems</h2>
                                    <input
                                        type="number"
                                        name="totalProblems"
                                        min={1}
                                        value={this.state.totalProblems}
                                        onChange={this.handleChange}
                                        disabled={!Rules[this.state.mode].hasNumProbs}
                                    />
                                </div>

                                <div>
                                    <h2 className={`${practiceEnable} form-area-label`}>Practice Mode</h2>
                                    <RadioGroup
                                        handleChange={this.handleChange}
                                        name="practice"
                                        radios={[{id: "On"}, {id: "Off"}]}
                                        checked={this.state.practice === true ? "On" : "Off"}
                                        disabled={!Rules[this.state.mode].hasPractice}
                                    />
                                </div>
                                <div>
                                    <h2 className={`${startClockEnable} form-area-label`}>Seconds on Clock</h2>
                                    <input
                                        type="number"
                                        value={this.state.startTime}
                                        name="startTime"
                                        min={2}
                                        onChange={this.handleChange}
                                        disabled={!Rules[this.state.mode].hasStartClock}
                                    />
                                </div>
                            </div>
                            <div className="start-warning">
                            <input className={buttonClasses} type="submit" value="Start"/>
                            {warningSpan}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
