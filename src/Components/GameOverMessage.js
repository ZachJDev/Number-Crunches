import React, { Component } from 'react';
 

class GameOverMessage extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     handleRestart = () => {
         this.props.restart()
     }
     render() { 
         return (
             <div>
                 <h1>Better luck next time, pardner</h1>
                 <button onClick={this.handleRestart}>Try again?</button>
             </div>
           );
     }
 }
  
 export default GameOverMessage;