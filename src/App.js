import './App.css';
import React, { Component } from "react";
 

export default class AppComponent extends Component {

  constructor(props) {
    super(props);

    //initialize the state, which only has one prop
    this.state = {
      randNumVal: this.newRandomNumber()
    };

    //bind "this" to callbacks so we have reference to this instance
    this.updateRandNumVal = this.updateRandNumVal.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Random Number Generator
          </p>
          
        </header>
        <p>Click Button Below to Generate a Random Number</p>
        <button className="App-generate" onClick={this.updateRandNumVal}>Generate!</button>
        <br/>
        <hr className="App-sep" />
        <p className="App-rand-val">{this.state.randNumVal}</p>
      </div>
    );
  }

  //* Update the state with a new random number
  updateRandNumVal(){
    this.setState({
      ...this.state,
      randNumVal: this.newRandomNumber()
    });
  }

  //* Return a random number from min to max (0-100) //*
  newRandomNumber() {
    return Math.floor(Math.random()*100);
  }
}
