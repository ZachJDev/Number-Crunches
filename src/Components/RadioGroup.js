import React, {Component} from 'react';

export default class RadioGroup extends Component {

    handleChange = (e) => {
        this.props.handleChange(e)
    }

    render() {
        return (
            this.props.radios.map(r => {
                return( <div key={r.id} className={this.props.radioClass}>
                    <input  onChange={this.handleChange} type="radio" name={this.props.name} value={r.id} id={r.id} checked={r.id === this.props.checked} disabled={this.props.disabled}></input>
                    <label htmlFor={r.id}>{r.id}</label>
                </div>)
            })
        )
    }
}