import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList/>}></Route>
          <Route path='/create-task' element={<TaskForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
