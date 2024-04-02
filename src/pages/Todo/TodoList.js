// TodoList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/action/todoActions';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleEdit(todo.id, prompt('Edit Todo', todo.text))}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
