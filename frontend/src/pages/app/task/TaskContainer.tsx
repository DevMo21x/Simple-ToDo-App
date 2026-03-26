import type { ChildComponentsProps } from "../../../types/task";
import TaskInfo from "./Task";
const TaskContainer = ({ tasks }: ChildComponentsProps) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskInfo key={task.id} task={task}/>
      ))}
    </>
  );
};

export default TaskContainer;
