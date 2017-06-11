import React from 'react';

import Todo from './Todo';

function TodoList({todos, onTodoClick}) {
	return (
		<ul>
			{
				todos.map(todoItem =>
          <Todo
            key={todoItem.id}
            text={todoItem.text}
            completed={todoItem.completed}
            onClick={() => onTodoClick(todoItem.id)}
          />
        )
			}
		</ul>
	);
}

export default TodoList;
