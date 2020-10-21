import React, { Component } from "react";
import Options from "./Options";
import MathTrainer from "./MathTrainer";
import {Switch, Route, Redirect} from 'react-router-dom'

import './StartPage.css'

export default class BasicTrainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: true,
      options: {},
    };
  }
  handleOptions = (options) => {
    this.setState({ isGameOver: false, options }, () => {
      this.props.history.push(`/Math-Trainer/${options.mode}`, this.state)
    })
    
  };
  handleRestart =() => {
    this.setState({isGameOver: true, options : {}})
  }
  render() {
    const titleClass = 'title';
    // I don't love this, but  dealing with route params (:gameMode) was a HUGE headache
    // In the future, I'd like to build this from the GameMode object.
    const modePaths = ["/Math-Trainer/Normal","/Math-Trainer/Zen", "/Math-Trainer/Blitz", "/Math-Trainer/Multiplication Tables"]
    return (
<React.Fragment>
       <div className='title-div'><h1 className={titleClass}>Number Cruncher: A Mental Math Workout </h1></div>
      <Switch>
        <Route path="/Math-Trainer/options" exact render={(routeProps) =><Options {...routeProps} handleOptions={this.handleOptions}/>}/>
        <Route path={modePaths} exact render={routeProps => <MathTrainer {...routeProps} options={this.state.options} handleRestart={this.handleRestart} />}/>

      <Route to="" render={() => <Redirect to="/Math-Trainer/options"/>}/>
      </Switch>
</React.Fragment>
    );
  }
}
