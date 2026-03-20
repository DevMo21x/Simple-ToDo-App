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

// get all tasks query
export const getAllTasks = async (): Promise<Task[]> => {
  const result = await dbConnection.query(
    "SELECT * FROM tasks ORDER BY  created_at DESC",
  );
  return result.rows;
};

// get a task by id query
export const getTaskById = async (id: number): Promise<Task | null> => {
  const result = await dbConnection.query("SELECT * FROM tasks WHERE id = $1", [
    id,
  ]);
  return result.rows[0] ?? null;
};

// create a new task query method
export const createTask = async (
  title: string,
  due_date: Date | null,
  is_completed: boolean,
  is_important: boolean,
): Promise<Task> => {
  const result = await dbConnection.query(
    `INSERT INTO tasks (title,due_date,is_completed, is_important) 
      VALUES ($1, $2, $3, $4) RETURNING *`,
    [title, due_date, is_completed, is_important],
  );
  return result.rows[0];
};

// delete a task by id query
export const deleteTask = async (id: number): Promise<Task | null> => {
  const result = await dbConnection.query(
    `
    DELETE FROM tasks
    WHERE id = $1 RETURNING *
    `,
    [id],
  );
  return result.rows[0] || null;
};

// update a task by id
export const updateTask = async (
  id: number,
  fields: Partial<
    Pick<Task, "title" | "due_date" | "is_completed" | "is_important">
  >,
): Promise<Task | null> => {
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  // Build: SET title = $1, is_completed = $2 ...
  const setClause = keys
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");

  const result = await dbConnection.query(
    `
      UPDATE tasks
      SET ${setClause}, updated_at = NOW()
      WHERE id = $${keys.length + 1}
      RETURNING *
    `,
    [...values, id],
  );
  return result.rows[0] ?? null;
};
