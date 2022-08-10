import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <div className='w-full h-screen bg-neutral-900' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}></Route>
          <Route path='/create-task' element={<TaskForm/>}></Route>
          <Route path='/edit-task/:id' element={<TaskForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
