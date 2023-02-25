import React from "react";
import { ChangeAlert } from "../ChangeAlert/index.jsx";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { EmptyResults } from "../EmptyResults/index";
import { EmptyTodos } from "../EmptyTodos/index";
import { Modal } from "../Modal/index.jsx";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoError } from "../TodoError/index.jsx";
import { TodoForm } from "../TodoForm/index.jsx";
import { TodoHeader } from "../TodoHeader/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { LoadingTodo } from "../TodoSkeleton/index.jsx";
import { useTodos } from "./useTodos.js";

function App() {
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = states;

  const {
    setSearchValue,
    toggleCompleteTodos,
    deleteTodo,
    setOpenModal,
    addTodo,
    syncTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <LoadingTodo />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptyResults={() => <EmptyResults searchValue={searchValue} />}
        /* render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => deleteTodo(todo.text)}
            onComplete={() => toggleCompleteTodos(todo.text)}
          />
        )} */
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onDelete={() => deleteTodo(todo.text)}
            onComplete={() => toggleCompleteTodos(todo.text)}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />

      <ChangeAlert sync={syncTodos} />
    </React.Fragment>
  );
}

export default App;
