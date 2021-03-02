import React, { Component } from "react";

class ClassBasedTodo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          text: "Task one",
          id: 1,
          isCompleted: false,
        },
        {
          text: "Task two",
          id: 2,
          isCompleted: false,
        },
      ],
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = () => {
    const newTask = {
      text: this.state.inputValue,
      id: Date.now(),
      isCompleted: false,
    };
    this.setState({ todos: [newTask, ...this.state.todos], inputValue: "" });
  };
  render() {
    return (
      <div className="classbased">
        Add a new Task :
        <input
          type="text"
          placeholder="Enter a new Task"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <input type="submit" value="Submit" onClick={this.handleClick} />
        <div className="todos">
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default ClassBasedTodo;
