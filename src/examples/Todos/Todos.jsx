import ClassBasedTodo from "./ClassBasedTodo";
import HooksBasedTodo from "./HooksBasedTodo";

const Todos = () => {
  return (
    <div className="container">
      <div className="classcontainer">
        <ClassBasedTodo />
      </div>
      <div className="hookscontainer">
        <HooksBasedTodo />
      </div>
    </div>
  );
};

export default Todos;
