import React from 'react';

const Todo = ({ id, removeTodo, text }) => {
  const handleRemoveClick = () => {
    removeTodo(id);
  }

  return (
    <div>
      { text }
      <button onClick={ handleRemoveClick }>
        Remove
      </button>
    </div>
  );
};

export default Todo;
