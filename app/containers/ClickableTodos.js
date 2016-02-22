import { connect } from 'react-redux'
import _ from 'lodash'
import TodoList from '../components/TodoList.js'
import {addTodo} from '../actions/TodoActions.js'


function mapDispatchToProps(dispatch) {
  return {
   onDoubleClick: () => {
    dispatch(addTodo('a random stuff ' + Math.random().toString(36).substr(2, 5)))
  }}
}
const mapStateToProps = (state) => {
  console.log('invoke mapStateToProps!')
  return {
    botros: state.todos
  }
}

const ClickableTodos = connect(
  mapStateToProps,
  mapDispatchToProps
  )(TodoList)

  export default ClickableTodos
