import React, {Component} from 'react'
import Options from './Options'
import MathTrainer from './MathTrainer'

export default class BasicTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGameOver: true,
            options: {}
        }
    }
    handleOptions = (options) => {
        console.log(options);
        this.setState({ isGameOver: false, options})
    }
    render() {
        return(
            <div>
                {
                    this.state.isGameOver ? 
                    <Options handleOptions={this.handleOptions} /> : 
                    <MathTrainer options={this.state.options}/>
                }
               </div>
        )
    }
}