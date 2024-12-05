import React, { useEffect, useState } from "react";
import { ToDoCard } from "../../components/ToDoCard/ToDoCard";
import { ToDoInput } from "../../components/ToDoInput/ToDoInput";
import { IToDo } from "../../interfaces/IToDo";
import { useToDoCard } from "../../components/ToDoCard/ToDoCardLogic";
import { EditModal } from "../../components/EditModal/EditModal";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { updateTask, updateTaskIndices } from "../../services/tasks_service";
import { toast } from "react-toastify";

const App: React.FC = () => {
  const {
    todos,
    handleDelete,
    fetchAllTasks,
    handleAddToDo,
    isModalOpen,
    selectedTodo,
    onDragEnd,
    openModal,
    closeModal,
    handleSave,
  } = useToDoCard();

  useEffect(() => {
    fetchAllTasks();
  }, []);


  return (
    <div>
      <h1>ToDo DragnDrop</h1>
      <ToDoInput onAdd={handleAddToDo} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks" type="list" direction="vertical">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ maxWidth: "100vw" }}
            >
              {todos.map((todo, index) => (
                <ToDoCard
                  key={todo.id}
                  index={index}
                  todo={todo}
                  onDelete={handleDelete}
                  openModal={openModal}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div>
        {selectedTodo !== null && (
          <EditModal
            isOpen={isModalOpen}
            taskName={
              todos.find((todo) => todo.id === selectedTodo)?.taskName || ""
            }
            priority={
              todos.find((todo) => todo.id === selectedTodo)?.priority || 1
            }
            onClose={closeModal}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default App;
