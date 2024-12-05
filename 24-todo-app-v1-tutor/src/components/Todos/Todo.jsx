import { RiTodoFill } from "react-icons/ri";
import styles from './Todo.module.css'

export default function Todo({ todo, deleteTodo, index }) {


  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}
