import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'
import _ from 'lodash'

class TodoList extends Component {

  render() {

    return (
      <ul>
        {_.map(this.props.todos, i =>
          <Todo key={i}/>
        )}
      </ul>
      )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

TodoList.defaultProps = { todos: [{id:1, completed:false, text:'iamdefaulttask'}] };

export default TodoList
