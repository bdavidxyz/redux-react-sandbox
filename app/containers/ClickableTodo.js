import { connect } from 'react-redux'
import _ from 'lodash'
import {toggleTodo} from '../actions/TodoActions.js'
import Todo from '../components/Todo.js'


const mapDispatchToProps = (dispatch) => {
  return {
    onMouseClick: (id) => {
      console.log('mouse clicked')
      dispatch(toggleTodo(id))
    }
  }
}

/*
 * Doesn't works !! map objet to object only.
 */
const mapStateToProps = (state) => {
  return {
    completed: state.todos[0].completed,
    id: state.todos[0].id,
    text: state.todos[0].text
  }
}

const ClickableTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default ClickableTodo
