import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tormar el curso de intro a react", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Escribir una gran historia", completed: false },
  { text: "jugar Carlos duty", completed: true },
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  //filtro tareas completadas
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // Filtro para la busqueda
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //Cada vez que reciba un text va a buscar en nuestra lista de
  //todos cumplen con esa condicion
  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodos={toggleCompleteTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
