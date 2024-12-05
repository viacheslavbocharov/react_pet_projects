import React, { useState } from 'react'
import Button from '../UI/Button'

export default function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState('')

    function handleFormSumbit(event) {
        event.preventDefault()
        if (todo) {
            addTodo(todo)
            setTodo('')
        }
    }

    return (
        <form>
            <input
                placeholder='Enter new todo'
                onChange={(event) => setTodo(event.target.value)}
                value={todo}
            />
            <Button onClick={handleFormSumbit} />
        </form>
    )
}
