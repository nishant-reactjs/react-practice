// todoActions.js
export const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: Math.random().toString(36).substr(2, 9), // Generate unique id
        text,
      }
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id
    };
  };
  
  export const editTodo = (id, newText) => {
    return {
      type: 'EDIT_TODO',
      payload: {
        id,
        newText
      }
    };
  };
  