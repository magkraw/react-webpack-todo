import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ listItems, onTodoRemoveClick }) => {
  return (
    <div>
      { listItems.map(({ id, text }) => (
        <Todo
          key={ id }
          id={ id }
          text={ text }
          removeTodo={ onTodoRemoveClick }
        />
      )) }
    </div>
  );
};

export default TodoList;
