const TodosClass = ({ todos, handleRemove, handleCheckbox }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={todo.id} style={{ color: todo.isCompleted ? "green" : "red" }}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleCheckbox(i)}
          />
          <input type="Submit" value="Remove" onClick={() => handleRemove(i)} />
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodosClass;
