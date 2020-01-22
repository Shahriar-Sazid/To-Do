import React, { Component } from 'react';
import classes from './TodoApp.module.css';
import StatusBar from '../../components/StatusBar/StatusBar';
import TodoList from '../../components/TodoList/TodoList';
import TodoInput from '../../components/TodoInput/TodoInput';
import Title from '../../components/Title/Title';

class App extends Component {
  state = {
    todoItems: [],
    incompleteCount: 0,
    lastId: -1,
    mode: 'all'
  };

  addTodoItemHandler = item => {
    item.id = this.state.lastId + 1;
    item.completed = false;
    const newTodoItems = [...this.state.todoItems, item];
    let incompleteCount = this.state.incompleteCount;
    incompleteCount = incompleteCount + 1;
    this.setState({
      todoItems: newTodoItems,
      incompleteCount,
      lastId: item.id
    });
  };

  tickHandler = id => {
    const items = [...this.state.todoItems];
    let incompleteCount = this.state.incompleteCount;
    const idx = items.findIndex(item => item.id === id);
    if (items[idx].completed) {
      items[idx].completed = false;
      incompleteCount = incompleteCount + 1;
    } else {
      items[idx].completed = true;
      incompleteCount = incompleteCount - 1;
    }
    this.setState({ todoItems: items, incompleteCount });
  };

  crossHandler = id => {
    const items = [...this.state.todoItems];
    const idx = items.findIndex(item => item.id === id);
    let incompleteCount = this.state.incompleteCount;
    if (!items[idx].completed) {
      incompleteCount--;
    }
    items.splice(idx, 1);
    this.setState({ todoItems: items, incompleteCount });
  };

  clearCompleted = () => {
    const items = [...this.state.todoItems];
    for (let i = 0; i < items.length; i++) {
      if (items[i].completed) {
        items.splice(i, 1);
        i--;
      }
    }
    this.setState({ todoItems: items });
  };

  showAll = () => {
    this.setState({ mode: 'all' });
  };

  showActive = () => {
    this.setState({ mode: 'active' });
  };

  showCompleted = () => {
    this.setState({ mode: 'completed' });
  };

  updateTodoHandler = (id, text) => {
    const items = [...this.state.todoItems];
    const idx = items.findIndex(item => item.id === id);
    items[idx].text = text;
    this.setState({ todoItems: items });
  };

  render() {
    return (
      <div className={classes.to_do_app}>
        <Title />
        <TodoInput inputHandler={this.addTodoItemHandler} />
        <TodoList
          items={this.state.todoItems}
          tickHandler={this.tickHandler}
          crossHandler={this.crossHandler}
          updateHandler={this.updateTodoHandler}
          mode={this.state.mode}
        />
        <StatusBar
          incompleteCount={this.state.incompleteCount}
          itemCount={this.state.todoItems.length}
          clearCompleted={this.clearCompleted}
          showAll={this.showAll}
          showActive={this.showActive}
          showCompleted={this.showCompleted}
          mode={this.state.mode}
        />
      </div>
    );
  }
}

export default App;
