import { Router } from "express";
import {
  getTasks,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
