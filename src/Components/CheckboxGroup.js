import React, {Component} from 'react';

export default class CheckboxGroup extends Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.value)
     }

    render() {
        return (
            <div>
            {this.props.boxes.map(boxVal => {
                return <div key={boxVal}>
                    <input type="checkbox" id={boxVal} name={boxVal} value={boxVal} onChange={this.handleChange} checked={this.props.checked.includes(boxVal)} disabled={!this.props.enabledList.includes(boxVal)}></input>
                    <label htmlFor={boxVal}>{boxVal}</label>
                </div>
            })}
            </div>
        )
    }
}