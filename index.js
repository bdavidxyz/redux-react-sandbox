import Hello from './app/containers/App';

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
