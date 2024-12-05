import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, deleteTodo }) {
    return (
        <div>
            {todos.length > 0 ? (
                todos.map((todo, index) => <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>)
            ) : (
                <h2>No todos</h2>
            )
            }
        </div >
    )
}