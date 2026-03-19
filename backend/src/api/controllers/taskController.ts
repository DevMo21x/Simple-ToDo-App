import { Request, Response, NextFunction } from "express";
import * as TaskModel from "../../models/taskModel";

export const getTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const tasks = await TaskModel.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const getTodoById = (req: Request, res: Response): void => {
  res.json({ message: `Get todo by id: ${req.params.id}` });
};

export const createTodo = (req: Request, res: Response): void => {
  res.json({ message: "Create todo" });
};

export const updateTodo = (req: Request, res: Response): void => {
  res.json({ message: `Update todo: ${req.params.id}` });
};

export const deleteTodo = (req: Request, res: Response): void => {
  res.json({ message: `Delete todo: ${req.params.id}` });
};
