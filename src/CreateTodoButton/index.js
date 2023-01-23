import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { setOpenModal, openModal } = React.useContext(TodoContext);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
