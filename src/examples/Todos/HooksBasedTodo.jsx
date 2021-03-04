import React, { useState } from "react";
import TodosClass from "./TodosClass";
import InputClass from "./InputClass";

const HooksBasedTodo = () => {
  const [inputValue, setInput] = useState("");
  const [todos, setTodos] = useState([
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
  ]);

  //update State from input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Add new Task
  const handleClick = () => {
    const newTask = {
      text: inputValue,
      id: Date.now(),
      isCompleted: false,
    };
    setTodos([newTask, ...todos]);
    setInput("");
  };
  // remove a Task
  const handleRemove = (i) => {
    const newArr = [...todos];
    newArr.splice(i, 1);
    setTodos(newArr);
  };
  // Checked/unchecked
  const handleCheckbox = (i) => {
    const newArr = [...todos];
    newArr[i].isCompleted = !newArr[i].isCompleted;
    setTodos(newArr);
  };

  return (
    <div className="hooksbased">
      <h3>Hooks Based Todo</h3>
      <InputClass
        handleClick={handleClick}
        handleChange={handleChange}
        inputValue={inputValue}
      />

      <TodosClass
        todos={todos}
        handleRemove={handleRemove}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
};
export default HooksBasedTodo;
