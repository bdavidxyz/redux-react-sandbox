import Todo from './app/components/Todo';
import TodoList from './app/components/TodoList';

import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <div>
      <h1> I am the dumb page dude </h1>
      <Todo/>
      <TodoList/>
    </div>,
    rootEl
  )
}

render()
