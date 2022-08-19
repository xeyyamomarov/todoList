import "./style.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

export const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const todoRef = useRef();

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const name = todoRef.current.value;
    if (name === "") return;
    todoRef.current.value=null

    setTodos([
      ...todos,
      {
        text: inputText,
        status:false,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);

    toast("Tapşırıq əlavə edildi");
    setInputText("");
  };

  const clearInput=()=>{
    setInputText("")
  }

  return (
    <div className="form">
        <div className="input">
          <input
            value={inputText}
            onChange={inputHandler}
            type="text"
            placeholder="Tapşırığı daxil edin"
            className="todo-input"
            ref={todoRef}
          />
          <span className="clear-btn">
          <button onClick={clearInput}>X</button>
          </span>
          <IconButton sx={{ color: "#00A3FF" }} onClick={submitTodoHandler}>
            <AddBoxIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </div>
    </div>
  );
};
