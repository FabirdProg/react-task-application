import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";


function App (){
 const {createTask}=useContext(TaskContext)
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='conatiner mx-auto'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}
 
export default App