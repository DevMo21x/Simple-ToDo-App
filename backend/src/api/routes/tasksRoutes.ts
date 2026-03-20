import { Router } from "express";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);

export default router;
