import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'


class App extends Component {
  constructor(){
    super()
    this.state= {
      todo: [],
      input: ''
    }
    this.handleTodo = this.handleTodo.bind(this)
  }

  handleInput(val){
    this.setState({input: val})
  }

  handleTodo(){
    this.setState({todo: [...this.state.todo, this.state.input], input: ''})
  }

  render() {
    let todo = this.state.todo.map((element, index) => {
      return <Todo key={index} task={element} />
    })
    return (
      <div className="App">
        <h1> My To-Do List:</h1>

        <div>
          <input
          value={this.state.input}
          onChange={e => this.handleInput(e.target.value)}
          />
          <button onClick={this.handleTodo}>Click Me!</button>
        </div>
        {todo}
      </div>
    );
  }
}

export default App;
