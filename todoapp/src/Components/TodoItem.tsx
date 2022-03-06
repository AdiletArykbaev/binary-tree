import React from "react";
import TodoItemClass from "../Store/todo-item";
import { useStore } from "../utils/getStore";
import { useState } from "react";
import { onEnterPress } from '../utils/onEnterPress';
import styled from 'styled-components';

interface Props {
  todo: TodoItemClass;
}

const Wrapper  = styled.div`
    width:80%;
    margin:5% auto;
    display:flex;
    justify-content:space-between;
  
`
const Edit = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

const Delete = styled.button`
    background-color: #FF0000;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

const TodoItem = ({ todo }: Props) => {
  const todoList = useStore();
  const [newText, setText] = useState("");
  const [isEditing, setEdit] = useState(false);
  const saveText = () => {
    todo.updateText(newText);
    setEdit(false);
    setText("");
  };
  return (
    <div className="todo-item">
      {isEditing ? (
        <Wrapper>
        <input type="text" onKeyDown={onEnterPress(saveText)} onChange={(e) => setText(e.target.value)}/>
        <Edit onClick={saveText}>save</Edit>
       </Wrapper>
      ) : (
        <Wrapper>
        <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
        <span>{todo.text}</span>

        <Edit onClick={() => setEdit(true)}>edit</Edit>
        <Delete onClick={() => todoList.removeTodo(todo)}>X</Delete>
        </Wrapper>
      )}
    </div>
  );
};

export default TodoItem;
