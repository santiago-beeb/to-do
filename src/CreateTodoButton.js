import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    alert("Diste un Click al boton gordito");
  };

  return (
    <button 
        className="CreateTodoButton" 
        onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
