import Todo from './app/components/Todo';
import TodoList from './app/components/TodoList';

import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

function render() {
  let tododata = {id:23, text:"bl", completed:true}
  ReactDOM.render(
    <div>
      <h1> I am the dumb page dude </h1>
      <p>----------------------------------------------------------</p>
      <p>
        Here is thes Todos
      </p>
      <Todo/>
      <Todo {...tododata}/>
      <Todo id={44} completed={false} text={'voila'}/>


      <p>----------------------------------------------------------</p>
      <p>
        Here is the TodoList
      </p>
      <TodoList/>
    </div>,
    rootEl
  )
}

render()
