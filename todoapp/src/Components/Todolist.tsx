import { useObserver } from 'mobx-react-lite';
import React from 'react'
import TodoItem from '../Components/TodoItem';
import { useStore } from '../utils/getStore';
import styled from 'styled-components';




const Wrapper = styled.div`
    width:60%;
    display:flex;
    justify-content: space-between;
    margin:5% auto;
`

const Title = styled.h1`
    font-size:24px;
    color:#00bfff;
`


const Done = styled.div`
       width:60%;
       box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
       min-height:50vh;
       padding:5% 1%;
`

const Doing = styled.div`
        width:60%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        min-height:50vh;
        padding:5% 1%;
`


const Todolist = () => {
  const todoList = useStore()
  return useObserver(()=>(
      <div className='todo-list'>
          <Wrapper>
            <Done>
                <Title>Cделать</Title>
                {todoList.openTodos.map(todo => <TodoItem key={`${todo.id} - ${todo.text}`} todo={todo}/>)}
            </Done>
            <Doing>
                <Title>Сделано</Title>
                {todoList.finishedTodos.map(todo => <TodoItem key={`${todo.id} - ${todo.text}`} todo={todo}/>)}
            </Doing>
          </Wrapper>
       
      </div>
  ))
}

export default Todolist