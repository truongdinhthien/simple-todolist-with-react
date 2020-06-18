import React from 'react';
import TodoList from './components/TodoList';

const App = () => {


  return (
    <>
      <h1 style={{ textAlign: "center", color: "red" }}>Todolist</h1>
      <div>
        <TodoList></TodoList>
      </div>
    </>
  );
};

export default App;
