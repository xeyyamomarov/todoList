import { Todo } from "../Todo/Todo";
import { Typography } from "@mui/material";
export const TodoList = ({ todos, setTodos, clearTodos }) => {
  const count = {
    width: "579px",
    display: "flex",
    justifyContent: "space-between",
    color: "#858585",
    height: "48px",
    padding: "0 15px",
    alignItems: "center",
  };

  const typography={
    fontSize:"12px",
    fontWeight:"400",
    cursor:"pointer",
    fontFamily:"Exo 2",
  }

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
          <Typography style={typography}>
            Ümumi:{todos.filter((todo) => !todo.complete).length} tapşırıq
          </Typography>
          <Typography style={typography} onClick={clearTodos}>Hamısını sil</Typography>
        </div>
      </div>
    </div>
  );
};
