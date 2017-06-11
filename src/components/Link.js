import React from 'react';

function Link({ active, onFilterCLick, children }) {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onFilterCLick()
      }}
    >
      {children}
    </a>
  )
}

export default Link;
