import App from './app/containers/App';
import rootReducer from './app/reducers';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

const store = createStore(rootReducer);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )
}

render()
