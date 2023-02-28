import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoEdit } from "../components/TodoEdit";
import { useTodos } from "../hooks/useTodos";

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id);

  const { states, stateUpdaters } = useTodos();
  const { loading, getTodo } = states;
  const { editTodo } = stateUpdaters;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }

  return (
    <TodoEdit
      defaultText={todoText}
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}
export { EditTodoPage };
