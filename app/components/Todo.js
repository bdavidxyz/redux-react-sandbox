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
    const { id, completed, onMouseClick } = this.props
    let divStyle =  completed ? {'textDecoration': 'line-through'} : {}
    this.state.highlighted ? divStyle.backgroundColor = 'yellow' : divStyle.backgroundColor = 'white'
    return (
      <li style={divStyle}
        onClick={onMouseClick(id)}
        //onDoubleClick={this.handleDoubleClick.bind(this)}
        >
        iam a todo, with id {id}
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

Todo.defaultProps = {id:0, completed:false, text:'replaceme', onMouseClick: () => {}};


export default Todo

