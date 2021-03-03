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
          <button onClick={() => handleRemove(i)}>Remove</button>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodosClass;
