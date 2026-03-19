import dbConnection from "../config/dbConfig";

export interface Task {
  id: number;
  title: string;
  due_date?: Date;
  is_completed: boolean;
  is_important: boolean;
  tag_id?: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

export const getAllTasks = async (): Promise<Task[]> => {
  const result = await dbConnection.query(
    "SELECT * FROM tasks ORDER BY  created_at DESC",
  );
  return result.rows;
};
