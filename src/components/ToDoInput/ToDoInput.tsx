import React from "react";
import { useToDoInput } from "./ToDoInputLogic";
import { IToDo } from "../../interfaces/IToDo";

interface ToDoInputProps {
  onAdd: (todo: IToDo) => void;
}

export const ToDoInput: React.FC<ToDoInputProps> = ({ onAdd }) => {
  const { name, priority, setName, setPriority, handleAddToDo } =
    useToDoInput(onAdd);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        marginBottom: "20px",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#363636",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input
        style={{
          width: "100%",
          padding: "10px 0px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          outline: "none",
          transition: "border 0.3s",
          textIndent: '12px'
        }}
        type="text"
        placeholder="Nome da Tarefa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(parseInt(e.target.value))}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          backgroundColor: "#363636",
          outline: "none",
          transition: "border 0.3s",
        }}
      >
        <option value={1}>Baixa</option>
        <option value={2}>Média</option>
        <option value={3}>Alta</option>
      </select>
      <button
        onClick={handleAddToDo}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        Adicionar
      </button>
    </div>
  );
};
