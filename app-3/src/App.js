import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: ['spaghetti', 'salsa', 'lasagna', 'pork', 'bacon', 'milk'],
      userInput: ''
    }
  }

  handleInput(val){
    this.setState({userInput: val})
  }

  render() {
    let foods = this.state.foods.filter((element, index) => {
      return element.includes(this.state.userInput)
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.handleInput(e.target.value)}/>
        {foods}
      </div>
    );
  }
}

export default App;
