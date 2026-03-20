import { Request, Response, NextFunction } from "express";
import * as TaskModel from "../../models/taskModel";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tasks = await TaskModel.getAllTasks();
    res.status(200).json({
      message: "Tasks fetch successfully",
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const task = await TaskModel.getTaskById(id);
    res.status(200).json({
      message: "Task fetched successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { title, due_date, is_completed, is_important } = req.body;
    const date = due_date ? new Date(due_date) : null;
    const createTask = await TaskModel.createTask(
      title,
      date,
      is_completed === true || is_completed === "true",
      is_important === true || is_important === "true",
    );
    res.status(201).json({
      message: "Task created!",
      createTask,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const id = Number(req.params.id);


  if (isNaN(id) || id <= 0) {
    res.status(400).json({ message: "Invalid task ID" });
    return;
  }

  try {
    const { title, is_completed, is_important } = req.body;
    const due_date = req.body.due_date
      ? new Date(req.body.due_date)
      : undefined;

    // Fix 2: only include fields that were actually provided
    const fields: Partial<
      Pick<
        TaskModel.Task,
        "title" | "due_date" | "is_completed" | "is_important"
      >
    > = {};
    if (title !== undefined) fields.title = title;
    if (due_date !== undefined) fields.due_date = due_date;
    if (is_completed !== undefined)
      fields.is_completed = is_completed === true || is_completed === "true";
    if (is_important !== undefined)
      fields.is_important = is_important === true || is_important === "true";


    if (Object.keys(fields).length === 0) {
      res.status(400).json({ message: "No fields provided to update" });
      return;
    }

    const updatedTask = await TaskModel.updateTask(id, fields);
    res.status(200).json({
      message: "Task Updated!",
      updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const id = Number(req.params.id);

  if (isNaN(id) || id <= 0) {
    res.status(400).json({ message: "Invalid task ID" });
    return;
  }

  try {
    const deletedTask = await TaskModel.deleteTask(id);
    if (!deletedTask) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json({
      message: "Task deleted!",
      deletedTask,
    });
  } catch (error) {
    next(error);
  }
};
