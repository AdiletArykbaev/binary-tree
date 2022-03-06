import React from 'react'
import { useState } from 'react';
import { useStore } from '../utils/getStore';
import { onEnterPress } from '../utils/onEnterPress';
import styled from 'styled-components';


const Wrapper = styled.div`
        height:50px,
        width:30%,
        display:flex,
        justify-content:space-between
`
const Button = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`
const Input = styled.input`
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    font-size: 16px;
    box-sizing: border-box;
`

const NewTodo = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        
        todoList.addTodo(newTodo);
        setTodo('');
    };
    
    console.log(todoList)
    return (
        <div>
            <Wrapper>
            <Input placeholder='введите задачу' type="text" value={newTodo} onKeyDown={onEnterPress(addTodo)} onChange={(e) => setTodo(e.target.value)}/> 
            <Button onClick={addTodo}>Add Todo</Button>
            </Wrapper>
            
        </div>
    )
}

export default NewTodo