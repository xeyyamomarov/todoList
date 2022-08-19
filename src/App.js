import "./App.css";
import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getLocalItems = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  const clearTodos = () => {
    setTodos([]);
    toast("Bütün tapşırıqlar silindi");
  };

  return (
    <div className="App">
      <header>
        <h1>TODO</h1>
      </header>
      <div className="todo-form">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoList setTodos={setTodos} todos={todos} clearTodos={clearTodos} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
