import React, { Component } from 'react';
import './App.css';
import Todo from './containers/TodoApp/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Todo />
      </div>
    );
  }
}

export default App;
