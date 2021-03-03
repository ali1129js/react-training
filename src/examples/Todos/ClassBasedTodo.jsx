import React, { Component } from "react";
import TodosClass from "./TodosClass";
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

  handleRemove = (i) => {
    const newArr = [...this.state.todos];
    newArr.splice(i, 1);
    this.setState({ todos: newArr });
  };
  render() {
    return (
      <div className="classbased">
        <input
          type="text"
          placeholder="Enter a new Task"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
        <input type="submit" value="Submit" onClick={this.handleClick} />
        <div className="todos">
          <TodosClass
            todos={this.state.todos}
            handleRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default ClassBasedTodo;
