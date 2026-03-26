import { useQuery } from "@tanstack/react-query";
import AppHeading from "./AppHeading";
import SideMenu from "./menu/SideMenu";
import TasksContentLayout from "./task/TasksContentLayout";
import axios from "axios";
import type { Task } from "../../types/task";
import type { GetTasksResponse } from "../../types/api/taskResponses";
const ToDoApp = () => {
  const {
    data: tasks,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async (): Promise<Task[]> => {
      const response = await axios.get<GetTasksResponse>(
        "http://localhost:3000/api/tasks",
      );
      const { tasks } = response.data;
      return tasks;
    },
  });
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="flex ">
      <div>
        <AppHeading />
        <SideMenu />
      </div>
      <div className="mt-38 ml-20">
        <TasksContentLayout tasks={tasks} />
      </div>
    </div>
  );
};

export default ToDoApp;
