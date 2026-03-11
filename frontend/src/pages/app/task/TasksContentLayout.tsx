import TasksHeading from "./TasksHeading";
import TaskContainer from "./TaskContainer";

const TasksMainLayout = () => {
  return (
    <>
      <TasksHeading />
      <div className="mt-5">
        <TaskContainer />
      </div>
    </>
  );
};

export default TasksMainLayout;
