import React, { Component } from "react";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from './CheckboxGroup';
import * as Modes from "./Modes";

let Rules ={} 

Object.keys(Modes).forEach(mode => {
  let r = Modes[mode].getDefaultRules()
     Rules[r.id] = r
  })


export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = { tick: 3, mode: "Zen", signs: ["*", "+", "/", "-"], max: 50, min: 0 };
    this.radios = [...Object.values(Rules)];
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleOptions(this.state);
  };
  handleChange = (event, value) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleCheckboxChange = (value) => {
    let signs = this.state.signs
    if(signs.includes(value)) signs = signs.filter(s => s !== value)
    else signs.push(value);
    this.setState({signs})
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


            {Rules[this.state.mode].defaultTotal ?
            <div>
            <h2>Number of Problems</h2>
            <input type="number" name="total" value={this.state.total} handleChange={this.handleChange}></input>
            </div>
            : null
            }

            {Rules[this.state.mode].practice ? (
              <div>
                <h2>Practice Mode?</h2>
                <RadioGroup
                  handleChange={this.handleChange}
                  name="practice"
                  radios={[{ id: "On" }, { id: "Off" }]}
                  checked={this.state.practice}
                />
              </div>
            ) : null}


          </div>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
