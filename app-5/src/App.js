import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css"
import Image from './Image'


class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Image link={"https://i.ytimg.com/vi/125x22DVY8A/maxresdefault.jpg"} />
      </div>
    );
  }
}

export default App;
