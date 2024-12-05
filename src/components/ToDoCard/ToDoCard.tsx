import React, { useState } from "react";
import { useToDoCard } from "./ToDoCardLogic";
import { IToDo } from "../../interfaces/IToDo";
import { formatingDate, formatingHourDate } from "../../utils/formateDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardBottomContent,
  CardContent,
  CardDateInfo,
  CardHeader,
  CardHeaderText,
  CardHolder,
  CardPaper,
  DelContainer,
  PencilContainer,
} from "./styles";
import {
  faCalendar,
  faClock,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons/faFlag";
import { Draggable } from "@hello-pangea/dnd";

interface ToDoCardProps {
  todo: IToDo;
  onDelete: (id: number) => void;
  openModal: (id: number) => void;
  index: number;
}

export const ToDoCard: React.FC<ToDoCardProps> = ({
  todo,
  onDelete,
  openModal,
  index,
}) => {
  const { toggleCompleted, getColorByPriority, handleUpdateTask } =
    useToDoCard();

  return (
    <>
      <Draggable draggableId={String(todo.id)} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <CardHolder>
                <CardPaper style={{ height: "100%" }}>
                  <div style={{ padding: "5px" }}>
                    <CardHeader
                      style={{
                        border: `1px solid ${getColorByPriority(
                          todo.priority
                        )}`,
                      }}
                    >
                      <FontAwesomeIcon icon={faFlag} color="white" />
                      <CardHeaderText>{todo.priority}</CardHeaderText>
                    </CardHeader>
                    <CardContent>{todo.taskName}</CardContent>
                    <CardBottomContent>
                      <CardDateInfo>
                        <div>
                          <FontAwesomeIcon
                            icon={faCalendar}
                            style={{ marginRight: "10px", color: "#B1B3C5" }}
                          />
                          {formatingDate(todo.createdAt)}
                        </div>
                        <div>
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{ marginRight: "10px", color: "#B1B3C5" }}
                          />
                          {formatingHourDate(todo.createdAt)}
                        </div>
                      </CardDateInfo>
                      <div
                        style={{
                          marginRight: "20px",
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <PencilContainer onClick={() => openModal(todo)}>
                          <FontAwesomeIcon icon={faPencil} title="Editar" />
                        </PencilContainer>
                        <DelContainer
                          style={{ marginRight: "0px" }}
                          onClick={() => onDelete(todo.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} title="Deletar" />
                        </DelContainer>
                      </div>
                    </CardBottomContent>
                  </div>
                </CardPaper>
              </CardHolder>
            </div>{" "}
          </div>
        )}
      </Draggable>
    </>
  );
};
