import {Container, Content, Footer} from "./styles"
import React, {useState} from 'react'

export default function Main() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    function handleTodo(todo){
        setTodo(todo)
    }

    function handleTodos(){
        if(todos){
            setTodos([...todos, todo])

        }
        else{
            setTodos(todo)

        }
    }

    function removeTodo(todox){
        const index = todos.filter((item) => (item !== todox))
        setTodos(index)
    }


    return (
        <div>
            <Container>
                <Content>
                    <h1>Lista de Tarefas</h1>
                    {todos.map((todo)=>
                        <article><h1>{todo}</h1><span onClick={()=>removeTodo(todo)}>remover</span></article>
                    )}
                    <Footer>
                    <input id="rogerio" type="text" onChange={(e)=>handleTodo(e.target.value)}placeholder="digite aqui a tarefa"></input>
                        <button type="submit" onClick={() => handleTodos()}>Cadastrar</button>
                    </Footer>
                </Content>
            </Container>
        </div>
    );
}

