import React from 'react';
import './App.css';
import NewTodo from './Components/NewTodo';
import Todolist from './Components/Todolist';


function App() {
  return (
    <div className="App">
       <NewTodo/>
       <Todolist/>
    </div>
  );
}

export default App;
