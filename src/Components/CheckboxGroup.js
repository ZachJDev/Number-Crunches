import React, {Component} from 'react';

export default class CheckboxGroup extends Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.value)
     }

    render() {
        return (
            <div>
            {this.props.boxes.map(b => {
                return <div>
                    <input type="checkbox" id={b} name={b} value={b} onChange={this.handleChange} checked={this.props.checked.includes(b)}></input>
                    <label for={b}>{b}</label>
                </div>
            })}
            </div>
        )
    }
}