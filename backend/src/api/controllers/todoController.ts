import { Request, Response } from "express";

export const getTodos = (req: Request, res: Response): void => {
  res.json({ message: "Get all todos" });
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
