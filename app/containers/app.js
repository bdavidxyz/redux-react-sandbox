import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../components/TodoList';
import SimpleContainer from '../containers/SimpleContainer';
import ClickableTodo from '../containers/ClickableTodo';
import ClickableTodos from '../containers/ClickableTodos';

class App extends React.Component {
  render() {
    return <ClickableTodos/>
  }
}

export default App
