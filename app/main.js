import Hello from './components/Hello';
import World from './components/World';
import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Hello/>,
    rootEl
  )
}

render()
