import React from "react";
import {TodoContext} from '../TodoContext/'
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue]= React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    


    return (
        <form onSubmit={onSubmit}>
            <label>hola muchachos</label>
            <textarea 
                required
                value={newTodoValue}
                onChange={onChange}
                placeholder="Aqui se escribe por si no sabe carechimba"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    La cague
                </button>
                <button
                className="TodoForm-button TodoForm-button-add"
                type="submit"
                >
                    No es más
                </button>
            </div>

        </form>
    );
}

export {TodoForm};