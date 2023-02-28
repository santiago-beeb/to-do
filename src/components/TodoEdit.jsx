import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EditTodoPage.css";

function TodoEdit(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = React.useState(
    props.defaultText || ""
  );

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate("/");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate("/");
  };
  return (
    <div className="container-edit">
      <form className="formulario" onSubmit={onSubmit}>
        <label className="titulo">Editar Tarea</label>
        <textarea
          required
          value={newTodoValue}
          onChange={onChange}
          placeholder="Escribe aquí tu tarea"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button className="TodoForm-button TodoForm-button-add" type="submit">
            Editar
          </button>
        </div>
      </form>
    </div>
  );
}
export { TodoEdit };
