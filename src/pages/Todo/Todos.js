import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
    </div>
);
};

export default Todos;
