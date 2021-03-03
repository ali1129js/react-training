const TodosClass = ({ todos, handleRemove }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleRemove(i)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodosClass;
