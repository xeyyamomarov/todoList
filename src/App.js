import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const clearTodos = () => {
    setTodos([]);
    toast("Bütün tapşırıqlar silindi")
  };

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>
      <div className="a">
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} clearTodos={clearTodos} />
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
