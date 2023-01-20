//import "./App.css";

const todos = [
  { text:'Cortar cebolla', completed: false, },
  { text:'llorar con la llorona', completed: false, },
  { text:'Cortar la carne', completed: false, },
  { text:'Cortar las papas', completed: false, },
]

function App() {
  return (
    <TodoCounter />
    <h2>Has completado 2 de 3 TODOs</h2>

    <TodoSearch />
    <input placeholder="remolacha" />
    <TodoList>
      {todos.map(todo => {
        return ()
      })}
    </TodoList>

    <CreateTodoButton />
  );
}

export default App;
