import React from "react";
import { useLocalStorage } from "./useLocalStorage.jsx";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sync: syncTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

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
  const toggleCompleteTodos = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  
  const addTodo = (text) => {
    const id = newId(todos);
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id,
    });
    saveTodos(newTodos);
  };
  
  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };
  
  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    return todos[todoIndex];
  }

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    getTodo,
  };

  const stateUpdaters = {
    setSearchValue,
    toggleCompleteTodos,
    deleteTodo,
    setOpenModal,
    addTodo,
    syncTodos,
    editTodo,
  };

  return { states, stateUpdaters };
}

function newId(todoList) {
  if (!todoList.length) {
    return 1;
  }
  const idList = todoList.map((todo) => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export { useTodos };
