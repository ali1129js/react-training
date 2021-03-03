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
        <InputClass
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
        />
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
