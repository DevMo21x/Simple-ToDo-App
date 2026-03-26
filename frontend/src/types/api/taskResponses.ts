// frontend/src/types/api/taskResponses.ts
import type { Task } from "../task";

export type GetTasksResponse = {
  message: string;
  count: number;
  tasks: Task[];
};