import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: ['Sushi', 'Spaghetti', 'Ice Cream', 'Bologna', 'Cheese']
    }
  }
  render() {
    let display = this.state.foods.map((element, index) => {
    return  <li key={index}>{element}</li>
    })
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
