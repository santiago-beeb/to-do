import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoContext } from "../TodoContext/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";

function AppUI() {
  const { error, loading, searchedTodos, deleteTodo, toggleCompleteTodos } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Que mierda, tuvimos un error...</p>}
        {loading && <p>Sorner que ya estamos cargando...</p>}
        {!loading && !searchedTodos.lenght && <p>Crea tu primer tarea!</p>}

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

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
