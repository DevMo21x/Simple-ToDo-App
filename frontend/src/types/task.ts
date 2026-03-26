// frontend/src/types/task.ts
export type Task = {
  id: number;
  title: string;
  due_date: string | null;
  is_completed: boolean;
  is_important: boolean;
  tag_id?: number;
  user_id: number;
  created_at: string;
  updated_at: string;
};

export type ChildComponentsProps = {
  tasks: Task[];
};
