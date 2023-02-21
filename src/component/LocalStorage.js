import React, { useEffect } from 'react';

function LocalStorage({ todos }) {
  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    <div />
  );
}

export default LocalStorage;
