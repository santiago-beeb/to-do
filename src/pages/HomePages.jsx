import React from "react";
import { ChangeAlert } from "../components/ChangeAlert";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { EmptyResults } from "../components/EmptyResults";
import { EmptyTodos } from "../components/EmptyTodos";
import { useTodos } from "../hooks/useTodos";
import { Modal } from "../components/Modal";
import { TodoCounter } from "../components/TodoCounter";
import { TodoError } from "../components/TodoError";
import { TodoForm } from "../components/TodoForm";
import { TodoHeader } from "../components/TodoHeader";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { LoadingTodo } from "../components/TodoSkeleton";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate  = useNavigate();
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
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => navigate(`/edit/${todo.id}`,{state: { todo }})}
            onDelete={() => deleteTodo(todo.id)}
            onComplete={() => toggleCompleteTodos(todo.id)}
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

export { HomePage };
