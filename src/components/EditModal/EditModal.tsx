import React from "react";
import { toast } from "react-toastify";

interface EditModalProps {
  isOpen: boolean;
  taskName: string;
  priority: number;
  onClose: () => void;
  onSave: (taskName: string, priority: number) => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  taskName,
  priority,
  onClose,
  onSave,
}) => {
  const [updatedTaskName, setUpdatedTaskName] = React.useState(taskName);
  const [updatedPriority, setUpdatedPriority] = React.useState(priority);

  const handleSave = () => {
    if (updatedTaskName.trim() === "") return toast.info("O nome não pode estar vazio.");
    onSave(updatedTaskName, updatedPriority);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(54, 54, 54)",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        <h2>Editar Tarefa</h2>

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
              textIndent: "12px",
            }}
            type="text"
            placeholder="Nome da Tarefa"
            value={updatedTaskName}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
          />
          <select
            value={updatedPriority}
            onChange={(e) => setUpdatedPriority(Number(e.target.value))}
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

          <div style={{ marginTop: "20px" }}>
            <button onClick={handleSave}>Salvar</button>
            <button onClick={onClose} style={{ marginLeft: "10px" }}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
