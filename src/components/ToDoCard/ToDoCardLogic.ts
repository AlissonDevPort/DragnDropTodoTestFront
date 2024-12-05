import { useEffect, useState } from "react";
import { IToDo } from "../../interfaces/IToDo";
import {
  deleteTask,
  getTaskList,
  updateTask,
} from "../../services/tasks_service";
import { toast } from "react-toastify";

export const useToDoCard = () => {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedTodo(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTodo(null);
  };

  const handleSave = (taskName: string, priority: number) => {
    if (selectedTodo !== null) {
      console.log(taskName, priority);
      handleUpdateTask(selectedTodo.id, taskName, priority);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const testinho = (arr: [], fromIndex: number, toIndex: number) => {
    const newArray = [...arr];
    const element = newArray[fromIndex];
    newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, element);

    setTodos(newArray);
  };

  const onDragEnd = async (result: any) => {
    if (!result.destination) {
      return;
    }

    testinho(todos, result.source.index, result.destination.index);
    toast.success(
      "Ordenado com sucesso, entretanto nosso dev não implementou no banco 100% :("
    );

    // const { response, statusCode } = await updateTaskIndices(
    //   result.draggableId,
    //   result.destination.index + 1
    // );
    // if (statusCode == 200 || statusCode == 201) {
    //   testinho(todos, result.source.index, result.destination.index);
    //   toast.success("Ordenado com sucesso");
    // } else {
    //  testinho(todos, result.destination.index, result.source.index);
    //  console.log(result.destination.index, result.source.index)
    //   toast.error("Erro ao reordenar");
    // }
  };

  const fetchAllTasks = async () => {
    try {
      const { response, statusCode } = await getTaskList();

      if (statusCode === 200) {
        setTodos(response.data);
      } else {
        alert("Erro ao obter as tarefas.");
      }
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      alert("Erro ao buscar tarefas.");
    }
  };

  const toggleCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todos.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const getColorByPriority = (priority: number) => {
    switch (priority) {
      case 1:
        return "#809CFF";
      case 2:
        return "#FFCC80";
      case 3:
        return "#FF8080";
      default:
        return "#ccc";
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const { response, statusCode } = await deleteTask(id);
      if (statusCode === 200) {
        setTodos((prevTodos) => {
          const updatedTodos = [...prevTodos];
          const indexToRemove = updatedTodos.findIndex(
            (todo) => todo.id === id
          );
          if (indexToRemove !== -1) {
            updatedTodos.splice(indexToRemove, 1);
          }
          toast.success("Tarefa eletada com sucesso.");
          return updatedTodos;
        });
      } else {
        toast.error("Erro ao obter as tarefas.");
      }
    } catch (error) {
      toast.error("Erro ao buscar as tarefas.");
    }
  };

  const handleUpdateTask = async (
    id: number,
    taskName: string,
    priority: number
  ) => {
    try {
      const { response, statusCode } = await updateTask(id, taskName, priority);
      if (statusCode === 200) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id
              ? { ...todo, taskName: taskName, priority: priority }
              : todo
          )
        );
      } else {
        alert("Erro ao obter as tarefas.");
      }
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      alert("Erro ao buscar tarefas.");
    }
    console.log("Tarefa alterada:", id);
  };

  const handleAddToDo = (todo: IToDo) => {
    setTodos((prev) => [...prev, todo]);
  };
  return {
    todos,
    setTodos,
    toggleCompleted,
    getColorByPriority,
    handleDelete,
    fetchAllTasks,
    handleAddToDo,
    handleUpdateTask,
    isModalOpen,
    setModalOpen,
    closeModal,
    deleteTask,
    onDragEnd,
    openModal,
    selectedTodo,
    setSelectedTodo,
    handleSave,
    testinho,
  };
};
