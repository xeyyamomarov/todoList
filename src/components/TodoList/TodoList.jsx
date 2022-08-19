import { Todo } from "../Todo/Todo";
import { Typography } from "@mui/material";
import img from "../../images/data.png"
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

  const typography = {
    fontSize: "12px",
    fontWeight: "400",
    cursor: "pointer",
    fontFamily: "Exo 2",
  };
  const check={
    display:"flex",
    width:"200px",
    justifyContent:"space-between"
  }

  return (
    <div className="todo-container">
      <div className="todo-list">
        {todos.length!==0?
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
          </ul>:
             <div className="data">
             <img src={img} alt="/"/>
             <p>Heç bir tapşırıq yoxdur.</p>
           </div>
        }
      
        <div style={count}>
          <div style={check}>
          <Typography style={typography}>
            Ümumi:{todos.filter((todo) => !todo.complete).length} tapşırıq
          </Typography>
          <Typography style={typography}>
            Hazır:{todos.filter((item) => item.status).length} tapşırıq
          </Typography>
          </div>
          <Typography style={typography} onClick={clearTodos}>
            Hamısını sil
          </Typography>
        </div>
      </div>
    </div>
  );
};
