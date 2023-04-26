{
  /*se deben importar dos metodos:
el useContext de react y el TaskContext que se creo
*/
}
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  {
    /*Para poder usar las variables definidas en el contexto debemos usar la funcion useContext y pasarle como parametro el nombre del contexto
     */
  }
  const {deleteTask}=useContext(TaskContext)
  
  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 txts-sm">{task.description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
      onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
