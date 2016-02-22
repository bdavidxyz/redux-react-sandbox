import _ from 'lodash';

let default_todos = [{
  id:33,
  text:'hellodude',
  completed:false
}];
export default function todos(state = default_todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: new Date().getTime(),
          completed: false,
          text: action.text
        },
        ...state
      ]
    case 'REMOVE_TODO':
      return state.filter(todo =>
        todo.id !== action.id
      )
    case 'TOGGLE_TODO':
      console.log('REDUCER - state was ' + JSON.stringify(state))
      console.log('REDUCER - action.id is ' + action.id)
      let toggled_todo = _.find(state, function(todo) {
        return todo.id.toString() === action.id.toString();
      });
      console.log('REDUCER - toggled_todo is ' + JSON.stringify(toggled_todo))
      toggled_todo.completed = !toggled_todo.completed;
      console.log('REDUCER - state is now ' + JSON.stringify(state))
      return state;
    default:
      return state;
  }
}
