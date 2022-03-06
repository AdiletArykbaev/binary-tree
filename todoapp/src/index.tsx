import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TodoList } from './Store/todo-list';
import { StoreProvider } from './utils/storeProvider';

const todoList = new  TodoList(["Задача 1","Задача 2","Задача 3"])

ReactDOM.render(
  <StoreProvider value={todoList}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
