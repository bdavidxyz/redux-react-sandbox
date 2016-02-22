import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

class TodoList extends Component {

  render() {
    return (
      <li>
        iam a todo
      </li>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default TodoList
