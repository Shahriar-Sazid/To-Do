import React from 'react';
import classes from './TodoInput.module.css';

const todoInput = props => {
  return (
    <div className={classes.todo_input}>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (event.target.elements[0].value.trim() === '') return;
          const item = {
            text: event.target.elements[0].value
          };
          item.text = item.text.trim();
          props.inputHandler(item);
          event.target.elements[0].value = '';
        }}
      >
        <span style={{ margin: 10, color: 'darkgray' }}>
          <i className="fas fa-chevron-down" />
        </span>
        <input
          style={{ border: 'none' }}
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  );
};

export default todoInput;
