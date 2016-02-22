import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'
import _ from 'lodash'

class TodoList extends Component {

  render() {
    const {onDoubleClick} = this.props
    return (
      <ul onDoubleClick={onDoubleClick}>
        {_.map(this.props.botros, todo =>
          <Todo key={todo.id} {...todo} onMouseClick={() => {}} />
        )}
      </ul>
      )
  }
}

TodoList.propTypes = {
  botros: PropTypes.array.isRequired,
  onDoubleClick:PropTypes.func
}

TodoList.defaultProps = { botros: [{id:1, completed:false, text:'iamdefaulttask'}] };

export default TodoList
