import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';


import { Container, ToDoList, Input, Button, ListItem, Check, Trash } from './styles';

function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState("")

  function change(event) {
    setTask(event.target.value)
  }


  function click() {
    if(task){
      setList([...list, { id: uuid(), task: task }])
    }

  }

  function finished(id) {

    const newList = list.map ((item) => item.id === id ? {...item, finished: !item.finished} : item,)

    setList(newList)
  }

  function listDelete(id){
    const newList = list.filter((item) => item.id !==id)
    setList(newList)
  }

  console.log(list)
  return (
    <Container>
      <ToDoList>
        <Input onChange={change} type="text" placeholder="O que tenho que fazer..." />
        <Button onClick={click} type="submit">Adicionar</Button>

        
        <ul>{
          list.length > 0 ? (
            list.map(item => (
            <ListItem key={item.id} isFinished = {item.finished}>
            <Check  onClick={ () => finished(item.id)}></Check>
            <li>{item.task}</li>
            <Trash onClick={ () => listDelete(item.id)}></Trash>
            </ListItem>
          )))
          : (
            <h3>Não há itens na lista</h3>
          )
        }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
