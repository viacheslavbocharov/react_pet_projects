
// import Button from '../UI/Button'

import { useState } from "react"
import styles from './TodoForm.module.css'

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder='Enter new todo'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" >Submit</button>
                {/* <Button /> */}
            </form>
        </div>
    )
}
