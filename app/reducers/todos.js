import _ from 'lodash';

let default_todos = [{
  id:0,
  text:'learn redux',
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
      let toggled_todo = _.find(state, function(todo) {
        return todo.id === action.id;
      });
      toggled_todo.completed = !toggled_todo.completed;
      return state;
    default:
      return state;
  }
}
