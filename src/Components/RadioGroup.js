import React, {Component} from 'react';

export default class RadioGroup extends Component {

    handleChange = (e) => {
        this.props.handleChange(e)
    }

    render() {
        return (
            this.props.radios.map(r => {
                return( <div>
                    <input onChange={this.handleChange} type="radio" name={this.props.name} value={r.id} id={r.id} checked={r.id === this.props.checked}></input>
                    <label for={r.id}>{r.id}</label>
                </div>)
            })
        )
    }
}