
export default function Todo({todo, deleteTodo, index}) {
    

  return (
    <div onDoubleClick={() => deleteTodo(index)}>{todo}</div>
  )
}
