import { connect } from 'react-redux'

import React from 'react';
import ReactDOM from 'react-dom';
import Simple from '../components/Simple';



function mapDispatchToProps(dispatch) {
  return {    onMouseClick: (id) => {
    console.log('mouse clicked')
    dispatch(toggleTodo(id))
  }}
}
function mapStateToProps(state) {
  return { text: state.todos.length.toString() }
}

const SimpleContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
  )(Simple)


  export default SimpleContainer
