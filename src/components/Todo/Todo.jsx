import "./style.css";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export const Todo = ({ text, todo, todos, setTodos }) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    toast("Tapşırıq silindi");
  };

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
            status:!item.status,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <div className="form">
        <div className="form-list">
        <IconButton
          sx={{ color: "#00D1FF" }}
          onClick={handleClick}
          className="complete-btn"
        >
          {active ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </IconButton>
        <Typography
          sx={{ fontFamily: "Exo 2" }}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          {text}
        </Typography>
        </div>
        <IconButton onClick={deleteHandler}>
          {active ? (
            <Delete sx={{ color: "#FF542F", background: "white" }} />
          ) : (
            <Delete sx={{ display: "none" }} />
          )}
        </IconButton>
      </div>
    </div>
  );
};
