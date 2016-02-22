import React, { Component, PropTypes } from 'react'

class Todo extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      highlighted: false
    }
  }

  handleDoubleClick() {
    this.setState({ highlighted: !this.state.highlighted })
  }

  render() {
    console.log('called render !!! within Todo.js')
    const { id, completed, onMouseClick, text } = this.props
    let divStyle =  completed ? {'textDecoration': 'line-through'} : {}
    this.state.highlighted ? divStyle.backgroundColor = 'yellow' : divStyle.backgroundColor = 'white'
    return (
      <li style={divStyle}
        onClick={() => onMouseClick(id)}
        >
        iam a todo, with id {id} and text {text}
      </li>
      )
  }
}

Todo.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number,
  onMouseClick: PropTypes.func
}

//Todo.defaultProps = {id:0, completed:false, text:'replaceme', onMouseClick: () => {}};


export default Todo

