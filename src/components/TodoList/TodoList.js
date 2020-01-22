import React from 'react';
import TodoItem from '../TodoList/TodoItem/TodoItem';

const todoList = props => {
  let jsxItem = [];
  if (props.mode === 'all') {
    jsxItem = props.items.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        tick={props.tickHandler}
        cross={props.crossHandler}
        update={props.updateHandler}
      />
    ));
  } else if (props.mode === 'active') {
    props.items.forEach(item => {
      if (!item.completed) {
        jsxItem.push(
          <TodoItem
            key={item.id}
            item={item}
            tick={props.tickHandler}
            cross={props.crossHandler}
            update={props.updateHandler}
          />
        );
      }
    });
  } else if (props.mode === 'completed') {
    props.items.forEach(item => {
      if (item.completed) {
        jsxItem.push(
          <TodoItem
            key={item.id}
            item={item}
            tick={props.tickHandler}
            cross={props.crossHandler}
            update={props.updateHandler}
          />
        );
      }
    });
  }
  return <div>{jsxItem}</div>;
};

export default todoList;
