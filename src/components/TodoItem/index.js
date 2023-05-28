import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="orderedList">
      <p className="para">{title}</p>
      <button type="button" className="btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
