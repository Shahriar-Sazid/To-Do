import React from 'react';
import classes from './TodoItem.module.css';

const todoItem = props => {
  const style = {
    display: 'none'
  };
  if (props.item.completed) {
    style.display = 'block';
  }

  return (
    <div className={classes.todo_item}>
      <div className={classes.button_block}>
        <button type="button" onClick={() => props.tick(props.item.id)}>
          <i className={[classes.mark, classes.x].join(' ')} style={style} />
          <i className={[classes.mark, classes.xx].join(' ')} style={style} />
        </button>
      </div>
      &nbsp;
      <span
        onClick={() => {
          document.execCommand('selectAll', false, null);
        }}
        onBlur={event => {
          event.persist();
          let text = event.target.innerText;
          if (props.item.text !== text) {
            if (text === '') event.target.innerText = props.item.text;
            else props.update(props.item.id, text);
          }
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            let text = event.target.innerText;
            console.log(text.length);
            event.target.blur();
            if (props.item.text !== text) {
              if (text === '') event.target.innerText = props.item.text;
              else props.update(props.item.id, text);
            }
          }
        }}
      >
        {props.item.text}
      </span>
      <div className={[classes.button_block, classes.cancel_block].join(' ')}>
        <button type="button" onClick={() => props.cross(props.item.id)}>
          <i className={[classes.mark, classes.y].join(' ')} />
          <i className={[classes.mark, classes.yy].join(' ')} />
        </button>
      </div>
    </div>
  );
};

export default todoItem;
