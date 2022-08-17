import "./App.css";
import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(getLocalItems());

  const clearTodos = () => {
    setTodos([]);
    toast("Bütün tapşırıqlar silindi");
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);
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
