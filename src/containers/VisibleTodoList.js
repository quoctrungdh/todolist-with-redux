import { connect } from 'react-redux';

import { toggleTodoItem } from '../actions';
import TodoList from '../components/TodoList';

function filteredTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(item => !item.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(item => item.completed);
    default:
      return todos;
  }
}

function mapStateToProps(state) {
	return {
		todos: filteredTodos(state.todos, state.visibilityFilter)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodoItem(id));
    }
  }
}

const VisibleTodoList = connect(
	mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
