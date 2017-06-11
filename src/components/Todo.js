import React from 'react';

function Todo({ text, onClick, completed }) {
	return (
		<li
			onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through': 'none'
      }}
		>
      {text}
    </li>
	)
}

export default Todo;
