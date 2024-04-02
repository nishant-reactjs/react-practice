import React, { useReducer, useState } from 'react';

const storedTodos = localStorage.getItem('todos');
const initialState =  {

      todos: storedTodos ? JSON.parse(storedTodos) : [],
  };

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
        const newTodos = [...state.todos, action.payload];
        localStorage.setItem('todos', JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case 'REMOVE_TODO':
        const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    
    const newTodoItem = {
      id: new Date().getTime(),
      text: newTodo,
    };

    dispatch({ type: 'ADD_TODO', payload: newTodoItem });

    setNewTodo('');
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div>
      <h1>Todo App</h1>

      {/* Form to add new to-do */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Display the list of todos */}
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;


// SIMPLE useReducer EXAMPLE

// import React, { useReducer } from 'react'

// const initialState = 0;
// const reducer = (value, action) =>{
//     switch (action) {
//         case "Increment":
//             return value + 1;
//         case "Decrement":
//             return value - 1;
//         default:
//             return value;
//     }
// }
// const UseReducer = () => {
//     const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//         <p>{count}</p>
//         <button onClick={()=> dispatch("Increment")}>Increment</button>
//         <button onClick={()=> dispatch("Decrement")}>Decrement</button>
//     </div>
//   )
// }

// export default UseReducer