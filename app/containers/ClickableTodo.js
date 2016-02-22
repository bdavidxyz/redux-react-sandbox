import { connect } from 'react-redux'
import {toggleTodo} from '../actions/TodoActions.js'
import Todo from '../components/Todo.js'

const mapDispatchToProps = (dispatch) => {
  return {
    onMouseClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const ClickableTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default ClickableTodo
