import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      password: '',
      username: ''
    }
    this.handleLogin = this.handleLogin.bind(this)
  }
  handlePWInput(val){
    this.setState({password: val})
  }
  handleUNInput(val){
    this.setState({username: val})
  }
  handleLogin(){
    return alert(`Password: ${this.state.password} Username: ${this.state.username}`)
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleUNInput(e.target.value)} placeholder='Username' />
        <input onChange={e => this.handlePWInput(e.target.value)} placeholder='Password' />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;
