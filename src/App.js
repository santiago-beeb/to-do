import React from "react";
import { TodoCounter } from "./TodoCounter.js";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

//import './App.css';
const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Escribir una gran historia", completed: false },
  { text: "jugar Fifa", completed: false },
  { text: "jugar Fifa", completed: false },
  { text: "jugar Fifa", completed: false },
  { text: "jugar Fifa", completed: true },
  { text: "jugar Fifa", completed: false },
  { text: "jugar Fifa", completed: true },
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
