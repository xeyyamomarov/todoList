import "./style.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { IconButton } from "@mui/material";
export const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <div className="form">
      <form>
        <div className="input">
          <input
            value={inputText}
            onChange={inputHandler}
            type="text"
            placeholder="Tapşırığı daxil edin"
            className="todo-input"
            required
          />
          <IconButton sx={{ color: "#00A3FF" }} onClick={submitTodoHandler}>
            <AddBoxIcon  sx={{fontSize:"40px"}}/>
          </IconButton>
        </div>
      </form>
    </div>
  );
};
