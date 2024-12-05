import { useState } from "react";
import { IToDo } from "../../interfaces/IToDo";
import { createNewTask } from "../../services/tasks_service";
import { toast } from "react-toastify";

export const useToDoInput = (onAdd: (todo: IToDo) => void) => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(1);

  const handleAddToDo = async () => {
    if (name.trim() === "") return toast.info("O nome não pode estar vazio.");

    try {
      const { response, statusCode } = await createNewTask(name, priority);

      if (statusCode === 201) {
        const newTask = {
          ...response.data 
        };
        console.log(newTask)

        onAdd(newTask);
        setName("");
        setPriority(1);
      } else {
        alert("Erro ao criar a tarefa.");
      }
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      alert("Erro ao adicionar tarefa.");
    }
  };
  return { name, priority, setName, setPriority, handleAddToDo };
};