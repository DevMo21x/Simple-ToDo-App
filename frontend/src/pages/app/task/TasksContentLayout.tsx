import TasksHeading from "./TasksHeading";
import TaskContainer from "./TaskContainer";
import CreateNewTask from "./CreateNewTask";
import type { ChildComponentsProps } from "../../../types/task";


const TasksMainLayout = ({tasks}: ChildComponentsProps) => {
  return (
    <>
      <TasksHeading />
      <div className="mt-5">
      <CreateNewTask />
      </div>
      <div className="mt-5">
        <TaskContainer tasks={tasks}/>
      </div>
    </>
  );
};

export default TasksMainLayout;
