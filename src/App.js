import React from 'react';
import './App.css';
import BasicTrainer from './Components/StartPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Route path='/' render={(routerProps) => <BasicTrainer {...routerProps} />}/>
            </Router>
        </div>
    );
}

export default App;
