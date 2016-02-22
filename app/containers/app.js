import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../components/TodoList';
import TodoList from '../containers/ClickableTodo';

class App extends React.Component {
  render() {
    return <ClickableTodo/>
  }
}

export default App
