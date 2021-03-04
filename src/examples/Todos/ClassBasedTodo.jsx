import React, { Component } from "react";
import TodosClass from "./TodosClass";
import InputClass from "./InputClass";

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

  //update State from input
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  // Add new Task
  handleClick = () => {
    const newTask = {
      text: this.state.inputValue,
      id: Date.now(),
      isCompleted: false,
    };
    this.setState({ todos: [newTask, ...this.state.todos], inputValue: "" });
  };
  // remove a Task
  handleRemove = (i) => {
    const newArr = [...this.state.todos];
    newArr.splice(i, 1);
    this.setState({ todos: newArr });
  };
  // Checked/unchecked
  handleCheckbox = (i) => {
    const newArr = [...this.state.todos];
    newArr[i].isCompleted = !newArr[i].isCompleted;
    this.setState({ todos: newArr });
  };

  render() {
    return (
      <div className="classbased">
        <h3>Class Based Todo list</h3>
        <InputClass
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
        <div className="todos">
          <TodosClass
            todos={this.state.todos}
            handleRemove={this.handleRemove}
            handleCheckbox={this.handleCheckbox}
          />
        </div>
      </div>
    );
  }
}

export default ClassBasedTodo;
