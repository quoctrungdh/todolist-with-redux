const initialState = {
	visibilityFilter: 'SHOW_ALL',
	todos: []
}

function todoAppReducers(state = initialState, action) {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return {
				...state,
				visibilityFilter: action.filter
			}

		case 'ADD_TODO':
			return {
				...state,
				todos: [
					...state.todos,
					{
						text: action.text,
            id: action.id,
						completed: false
					}
				]
			}

		case 'TOGGLE_TODO_ID':
      return {
        ...state,
        todos: state.todos.map(todoItem => {
          if (todoItem.id !== action.id) {
            return todoItem;
          }
          return {
            ...todoItem,
            completed: !todoItem.completed
          }
        })
      }
		default:
			return state;
	}
}

export default todoAppReducers;
