import { useState,useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const {createTask}=useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
        title,
        description,
    }
    setTitle("")
    setDescription("")

    {
      /*se llama a la funcion que esta en app con la nueva tarea a crear*/
    }
    createTask(newTask);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-md mx-auto"> 
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">    
        <h1 className="text-2xl font-bold text-white
        ">Crea tu tarea</h1>
        <input
          placeholder="Ingrese una tarea"        
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
        ></input>
        <textarea
          placeholder="Ingrese una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-300"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
