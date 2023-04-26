import { createContext } from "react";
import {tasks as data} from '../data/task'
import {useState,useEffect} from 'react'


{
  /*Este es el nombre del contexto, se usa para que los objetos de react puedan acceder a las variables del contexto*/
}
export const TaskContext = createContext();

{
  /*Esta funcion es la que contendra a todos los objetos de react por lo que debe ponerse antes de la funcion App en el main.js
La misma recibe props de todos sus hijos (childrens) y permite que accedan a las variables que querramos*/
}
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
      }, []);
    
      function createTask (task){
        const newTask={
          id:(tasks.length!==0 ? tasks[tasks.length-1].id+1 : 0),
          title:task.title,
          description:task.description,
        }
        setTasks([...tasks,newTask])
      }
    
      function deleteTask(taskId){
        //no funciona el filtro
        setTasks(tasks.filter(task=>task.id !== taskId))
        console.log(taskId)
      }
    

  return (
    <TaskContext.Provider value={
        {
        tasks,
        createTask,
        deleteTask,
        }
    }>{props.children}</TaskContext.Provider>
  );
}
