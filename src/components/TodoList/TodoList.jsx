import { Todo } from "../Todo/Todo";
export const TodoList = ({ todos, setTodos, clearTodos }) => {
  const count = {
    width: "579px",
    display: "flex",
    justifyContent: "space-between",
    color: "#858585",
    cursor: "pointer",
    fontWeight: "400",
    fontSize: "12px",
    height: "48px",
    padding: "0 15px",
    alignItems: "center",
  };
  return (
    <div className="todo-container">
      <div className="todo-list">
        <ul>
          {todos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </ul>
        <div style={count}>
          <span>
            Ümumi:{todos.filter((todo) => !todo.complete).length} tapşırıq
          </span>
          <span onClick={clearTodos}>Hamısını sil</span>
        </div>
      </div>
    </div>
  );
};
