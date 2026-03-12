import TasksHeading from "./TasksHeading";
import TaskContainer from "./TaskContainer";
import CreateNewTask from "./CreateNewTask";
const TasksMainLayout = () => {
  return (
    <>
      <TasksHeading />
      <div className="mt-5">
      <CreateNewTask />
      </div>
      <div className="mt-5">
        <TaskContainer />
      </div>
    </>
  );
};

export default TasksMainLayout;
