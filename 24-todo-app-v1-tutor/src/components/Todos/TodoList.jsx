import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList({ todos, deleteTodo }) {
    return (
        <div styles={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo, index) => <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index}/>)}
        </div>
    )
}