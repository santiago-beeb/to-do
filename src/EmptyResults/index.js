import React from "react";
import './EmptyResults.css'

function EmptyResults({searchValue}) {
  return <p>¡No se encuentra la tarea <strong>{searchValue}</strong> que estas buscando!</p>;
}

export { EmptyResults };
