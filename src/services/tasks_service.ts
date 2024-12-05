import axios from "axios";
import { api } from "../lib/axios";

export const getTaskList = async () => {
  try {
    const response = await api.get("/tasks");

    return { response: response.data, statusCode: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        response: error.response?.data,
        statusCode: error.response?.status,
      };
    }
    return { response: null, statusCode: 500 };
  }
};

export const createNewTask = async (taskName: string, priority: number) => {
  try {
    const response = await api.post("/tasks", {
      taskName,
      priority,
    });

    return { response: response.data, statusCode: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        response: error.response?.data,
        statusCode: error.response?.status,
      };
    }
    return { response: null, statusCode: 500 };
  }
};

export const deleteTask = async (id: number) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return { response: response.data, statusCode: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        response: error.response?.data,
        statusCode: error.response?.status,
      };
    }
    return { response: null, statusCode: 500 };
  }
};

export const updateTask = async (
  id: number,
  taskName: string,
  priority: number
) => {
  try {
    const response = await api.put(`/tasks/${id}`, {
      taskName: taskName,
      priority: priority,
    });
    return { response: response.data, statusCode: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        response: error.response?.data,
        statusCode: error.response?.status,
      };
    }
    return { response: null, statusCode: 500 };
  }
};

export const updateTaskIndices = async (id: number, newIndex: number) => {
  try {
    const response = await api.put(`/tasks/${id}/index`, {
      newIndex: newIndex,
    });
    return { response: response.data, statusCode: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        response: error.response?.data,
        statusCode: error.response?.status,
      };
    }
    return { response: null, statusCode: 500 };
  }
};
