import React, { Component, PropTypes } from 'react'

class Todo extends Component {

  render() {
    const { id, completed } = this.props
    let divStyle =  completed ? {'textDecoration': 'line-through'} : {}
    return (
      <li style={divStyle}>
      iam a todo, with id {id}
      </li>
      )
  }
}

Todo.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number
}

Todo.defaultProps = {id:0, completed:false, text:'replaceme'};


export default Todo

