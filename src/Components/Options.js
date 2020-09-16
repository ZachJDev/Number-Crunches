import React, { Component } from "react";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from './CheckboxGroup';
import * as Modes from "./Modes";

let Rules ={} 

Object.keys(Modes).forEach(mode => {
  if(!!Modes[mode].getDefaultRules){ // This stops the abstract GameMode class from being added to the list
  let r = Modes[mode].getDefaultRules()
     Rules[r.id] = r
  }
  })


export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: "Normal", signs: [ "+", "-"]};
    Object.assign(this.state, Rules['Normal'])
    this.radios = [...Object.values(Rules)];
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleOptions(this.state);
  };
  handleChange = (event, value) => {
    if(event.target.name === 'practice') {
      let practice = this.state.practice;
      this.setState({[event.target.name]: !practice });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }

    if(event.target.value === 'Multiplication Tables') {
      this.setState({ signs: ['*']})
    }
  };
  handleCheckboxChange = (value) => {
    if(this.state.mode === 'Multiplication Tables') {
      this.setState({ signs: ['*']})
    } else {
    let signs = this.state.signs
    if(signs.includes(value)) signs = signs.filter(s => s !== value)
    else signs.push(value);
    this.setState({signs})
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        
          <RadioGroup
            name="mode"
            radios={this.radios}
            handleChange={this.handleChange}
            checked={this.state.mode}
          />

          <div>
            <h1>{this.state.mode}</h1>
            <div>


            <label htmlFor="max">Max Number</label>
            <input type="number" name="max" value={this.state.max} onChange={this.handleChange}></input>
            </div>
            <div>
            <label htmlFor="min">Min Number</label>
            <input type="number" name="min" value={this.state.min} onChange={this.handleChange}></input>
            </div>


            <h2>Choose Signs</h2>
            <CheckboxGroup boxes={["*", "+", "/", "-"]} checked={this.state.signs} handleChange={this.handleCheckboxChange}/>


            {Rules[this.state.mode].problemCount ?
            <div>
            <h2>Number of Problems</h2>
            <input type="number" name="totalProblems" value={this.state.totalProblems} onChange={this.handleChange}></input>
            </div>
            : null
            }
            {Rules[this.state.mode].hasPractice ? (
              <div>
                <h2>Practice Mode?</h2>
                <RadioGroup
                  handleChange={this.handleChange}
                  name="practice"
                  radios={[{ id: "On" }, { id: "Off" }]}
                  checked={this.state.practice === true ? "On": "Off"}
                />
              </div>
            ) : null}
            {Rules[this.state.mode].timer === 'down' && !this.state.practice ?

            <div>
            <h2>Start Time on Clock?</h2>  
            <input type="number" value={this.state.startTime} name='startTime' onChange={this.handleChange}/>
            </div>
            : null
            }


          </div>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
