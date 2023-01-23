import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoContext } from "../TodoContext/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoForm } from "../TodoForm/index.jsx";
import { Modal } from "../Modal/index.jsx";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { LoadingTodo } from "../TodoSkeleton/index.jsx";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    deleteTodo,
    toggleCompleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <h1>Hay un error querido amigo</h1>}
        {loading &&
          new Array(4).fill().map((item, index) => <LoadingTodo key={index} />)}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => deleteTodo(todo.text)}
            onComplete={() => toggleCompleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
