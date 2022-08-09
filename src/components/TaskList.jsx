import {useSelector, useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/taskSlice'
function TaskList() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <>
    <header>
        <h1>Pend works {tasks.length} </h1>
      </header>
      {tasks.map(task => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <h2>{task.description}</h2>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default TaskList